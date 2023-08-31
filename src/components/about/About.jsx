import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine, RiHome4Line } from "react-icons/ri"; 
import me from "../../assets/edit.png";

const About = () => { 
    return (
        <section className="about"> 
            <main>
                    <h1></h1>
                <article>
                    <h4>Marta's burger</h4> 
                    <p> Questo è Marta's burger. Il posto giusto per i panini più gustosi del mondo. </p>
                    <p> Scopri tutti i nostri gusti. Clicca qui sotto per vedere il menu </p>            
                    <Link to="/"> <RiHome4Line /> </Link> 
                </article>
                <br />
                <div> 
                    <h2>Fondatrice</h2> 
                    <article>
                        <div>
                            <img src={me} alt="fondatore" /> 
                        </div>
                        <p> Ciao! Io sono Marta, propietaria di Marta's burger. Gli esperti del gusto...</p> 
                    </article>
                </div> 
            </main>
        </section> 
    );
};

export default About;