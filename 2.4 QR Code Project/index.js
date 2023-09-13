/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "node:fs";


const questions = [
    {      
      name: 'URL',
      message: "Give URL you want QR-code for! ",
    },
]

inquirer
  .prompt(questions)
  .then((answers) => {
    
    let feedbackReceived = answers.URL;
    console.log("feedback: " + feedbackReceived);
    //write it to file
    var qr_svg = qr.image(feedbackReceived);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile("./feedback.txt", feedbackReceived, (err) => {
        if(err)
        throw err;
    console.log("File has been saved!");
    })

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
        // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.log("Something else went Wrong");
    }
  });



  //write with fs
//   fs.writeFile("feedback.txt", `${feedbackReceived}`, (err) => {
//     if(err)
//         throw err;
//     console.log("Message written successfully.");
// }); 