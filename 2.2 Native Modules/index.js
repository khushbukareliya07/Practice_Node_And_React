const fs = require("fs");

// fs.writeFile("message.tct", "Hello From node js", (error)=> {
//     if(error) throw error;
//     console.log("the file has been saved!");
// });

fs.readFile("./message.txt", "utf8", (err,data)=> {
    if(err) 
    {
        console.log("Throwig error");
        throw err;
    }
    console.log(data);
})