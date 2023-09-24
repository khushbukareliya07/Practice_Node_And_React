import React from "react";
import Header from "./Header";

const date = new Date();
let year = date.getFullYear();


function Footer()
{
    return( 
         <footer>
            <p>CopyRight@ {year}</p>
        </footer>
    );
}

export default Footer;