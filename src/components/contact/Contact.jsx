import React from "react";
import { motion } from "framer-motion"; 
import burger from "../../assets/burger2.png"; 
import Popup from 'reactjs-popup';

const Contact = () => { 
    return (
        <section className="contact"> 
            <motion.form
                initial={{
                    x: "-100vw", 
                    opacity: 0,
                }} 
                animate={{
                    x: 0,
                    opacity: 1, 
                }}
                transition={{ 
                    delay: 0.2 }}
            >
            <h2>Contattaci</h2>
            <input type="text" placeholder="Nome" /> 
            <input type="email" placeholder="Email" />
            <textarea placeholder="Messaggio..." cols="30" rows="10"></textarea> 
            <Popup trigger=
                {<button type="button">Invia</button>}
            >
            <div style={{color:"red", transform: 'translate(25%,-700%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Thank you for cotacting us! We will get back to you shortly.</div>
            </Popup>
            </motion.form>
            <motion.div 
                className="formBorder" 
                initial={{
                    x: "100vw",
                    opacity: 0, 
                }}
                animate={{ 
                    x: 0,
                    opacity: 1, 
                }}
                transition={{ 
                    delay: 0.2 
                }} 
            >
            <motion.div 
                initial={{
                    y: "-100vh", 
                    x: "50%", 
                    opacity: 0,
                }} 
                animate={{
                    x: "50%", 
                    y: "-50%", 
                    opacity: 1,
                }} 
                transition={{
                    delay: 0.5, 
                }}
            >
            <img src={burger} alt="Burger" />
            </motion.div> 
            </motion.div>
        </section> 
    );
};


export default Contact;