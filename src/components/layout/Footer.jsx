import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => { 
    return (
    <footer> 
        <div>
            <h2>Marta's Burger</h2>
                <p>Qui per dare il massimo!</p> 
            <br />
            <strong>All right received @burgershop</strong> 
        </div>
        
        <aside>
            <h4>Seguici!</h4>
            <a href="https://youtube.com/xyz"> <AiFillYoutube /> </a>
            <a href="https://instagram.com/xyz">   <AiFillInstagram /> </a>
        </aside> 
    </footer>
    );
};


export default Footer;