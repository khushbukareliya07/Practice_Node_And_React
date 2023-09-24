import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function ContactCard(props)
{
    return (
        
        <div className="card" >
            <div className="top">
                {/* <h1>{props.id}</h1> */}
                <h2 className="name" >{props.name}</h2>
                <Avatar img = {props.img}/>
            </div>
           <Info tel = {props.tel} email = {props.email}/> 
            
        </div>
    )
}
export default ContactCard;


