import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/edit.png";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={300} width={300} />
        <h3>Marta's Burger</h3>

        <p>
          Ciao! sono Marta e sono la fondatrice del negozio.
          <br />
          Il nostro obiettivo è creare il panino più gustoso del pianeta
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
