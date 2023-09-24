import React, { Component } from "react";
import ContactCard from "./ContactCard.jsx";
import contacts from "../contacts.js";

function createCard(contact)
{
    return(
        <ContactCard 
            key ={contact.id}
            id = {contact.id}
            name = {contact.name} 
            email = {contact.email} 
            tel = {contact.phone}
            img = {contact.imgURL} />
    )
}
function App()
{
    return(
    <div>
        <h1 className="heading">My Contacts</h1>
        
        {contacts.map(createCard)}
                {/* <ContactCard 
                name = {contacts[0].name} 
                email = {contacts[0].email} 
                tel = {contacts[0].phone}
                img = {contacts[0].imgURL} />
                
                <ContactCard 
                name = {contacts[1].name} 
                email = {contacts[1].email} 
                tel = {contacts[1].phone}
                img = {contacts[1].imgURL} />
                
                <ContactCard 
                name = {contacts[2].name} 
                email = {contacts[2].email} 
                tel = {contacts[2].phone}
                img = {contacts[2].imgURL} /> */}
    </div>
    );
}
export default App;
