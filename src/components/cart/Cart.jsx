import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import Menu from "../home/Menu";

const CartItem = ({ addItem, value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [burger1Num, setBurger1Num] = useState(0);
  const [burger2Num, setBurger2Num] = useState(0);
  const [burger3Num, setBurger3Num] = useState(0);
  const subTotal = (burger1Num * 2) + (burger2Num * 5) + (burger3Num * 7);
  const iva = subTotal * 0.22;
  const speseSpedizione = 2;


  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={burger1Num}
          increment={() => {setBurger1Num(burger1Num + 1)}}
          decrement={() => {setBurger1Num(burger1Num - 1)}}

        />
        <CartItem
          title={"Cheese Burger Vegetariano"}
          img={burger2}
          value={burger2Num}
          increment={() => {setBurger2Num(burger2Num + 1)}}
          decrement={() => {setBurger2Num(burger2Num - 1)}}    
        />
        <CartItem
          title={"Cheese Burger con patatine"}
          img={burger3}
          value={burger3Num}
          increment={() => {setBurger3Num(burger3Num + 1)}}
          decrement={() => {setBurger3Num(burger3Num - 1)}}       
        />       

        <article>
          <div>
            <h4>Sub Totale</h4>
            <p>€{subTotal}</p>
          </div>
          <div>
            <h4>IVA</h4>
            <p>€{iva}</p>
          </div>
          <div>
            <h4>Spese di spedizione</h4>
            <p>€{speseSpedizione}</p>
          </div>{" "}
          <div>
            <h4>Totale</h4>
            <p>€{parseFloat(subTotal + iva + speseSpedizione).toFixed(2)}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
