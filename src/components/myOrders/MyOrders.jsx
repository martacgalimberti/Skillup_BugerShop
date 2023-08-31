import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>ID ordine</th>
              <th>Stato</th>
              <th>Prodotti</th>
              <th>Quantità</th>
              <th>Metodo di pagamento</th>
              <th>Azione</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#sdkfsdfdsf</td>
                <td>Processing</td>
                <td>23</td>
                <td>€{2132}</td>
                <td>COD</td>
                <td>
                  <Link to={`/order/${"asdsds"}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
