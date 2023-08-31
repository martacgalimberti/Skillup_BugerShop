import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

 function addToCartHandler(data) {
    {alert(data)};
    console.log(data);
    };

const Menu = () => {

    return (
        <section id="menu">
            <h1>MENU</h1>
            <br />
        <div> 

        <MenuCard
            itemNum={1} 
            burgerSrc={burger1} 
            price={2} 
            title="Cheese Burger" 
            handler={addToCartHandler} 
            delay={0.1}
        /> 
        <MenuCard
            itemNum={2} 
            burgerSrc={burger2} 
            price={5}
            title="Cheese Burger Vegetariano" 
            delay={0.5} 
            handler={addToCartHandler}
        /> 
        <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            price={7}å
            title="Cheese Burger con patatine" 
            delay={0.8}
            handler={addToCartHandler} 
        />
        </div>
        </section>
    );
};

export default Menu;