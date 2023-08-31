import React from "react";

const OrderDetails = () => { 
    return (
        <section className="orderDetails"> 
            <main>
                <h1>Dettagli ordine</h1> 
                    <div>
                    <h1>Spedizione</h1> 
                        <p>
                            <b>Indirizzo</b>
                            {"sjda 12-32ss dsad"} 
                        </p>
                    </div> 
                    <div>
                    <h1>Contatti</h1> 
                        <p>
                            <b>Nome</b>
                            {"Stuart"} 
                        </p>
                        <p>
                            <b>Telefono</b> 
                            {2131232123}
                        </p> 
                    </div>
                    <div> 
                    <h1>Stato</h1> 
                        <p>
                            <b>Stato ordine</b>
                            {"Processing"} 
                        </p>
                        <p>
                            <b>Fatto il</b> 
                            {"23-02-2002"}
                        </p> 
                        <p>
                            <b>Consegnato ilt</b>
                            {"23-02-2003"} 
                        </p>
                    </div>
                    <div>
                    <h1>Pagamento</h1> 
                        <p>
                            <b>Metodo di pagamento</b> 
                            {"COD"}
                        </p> 
                        <p>
                            <b>ID pagamento</b>#{"asdasdsadsad"} 
                        </p>
                        <p>
                            <b>Pagato il</b> 
                            {"23-02-2003"}
                        </p> 
                    </div>
                    <div> 
                    <h1>Quantità</h1> 
                        <p>
                            <b>Totale pezzi</b>€{2132} 
                        </p>
                        <p>
                            <b>Costi di spedizione</b>€{200}
                        </p> 
                        <p>
                            <b>IVA</b>€{232} 
                        </p>
                        <p>
                            <b>Totale</b>€{232 + 200 + 2132}
                        </p> 
                    </div>

                    <article>
                        <h1>Prodotti ordinati</h1> 
                        <div>
                            <h4>Cheese Burger</h4> 
                            <div>
                                <span>{12}</span> x <span>{232}</span> 
                            </div>
                        </div> 
                        <div>
                            <h4>Cheese Burger Vegetariano</h4>
                            <div>
                                <span>{10}</span> x <span>{500}</span>
                            </div> 
                        </div>
                        <div>
                            <h4>Burger con patatine</h4> 
                            <div>
                                <span>{10}</span> x <span>{1800}</span> 
                            </div>
                        </div>
                        <div> 
                            <h4
                                style={{ 
                                    fontWeight: 800,
                                }} 
                            > Sub Totale </h4>
                            <div 
                                style={{
                                    fontWeight: 800, }}
                            >
                                €{2132}
                            </div> 
                        </div>
                    </article> 
            </main>
        </section> 
    );
};


export default OrderDetails;