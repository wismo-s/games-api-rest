import React, { useContext, useState, useEffect } from "react";
import { Contextapp } from "../api/context";
import { Cartitem } from "../components/cartitem";
import { cartEdit } from "../api/list.api";
import { ContextCart } from "../api/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const context = useContext(Contextapp);
  const [cartitems, setCartitems] = useState([]);
  const cartcontext = useContext(ContextCart);
  const [cartid, setCartid] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const items = context.data.games.filter((item) =>
      cartcontext.cart.includes(item.id)
    );
    setCartid(cartcontext.cart);
    setCartitems(items);
  }, []);

  const pricetotal = cartitems
    .reduce((acc, item) => {
      acc += parseFloat(item.price);
      return acc;
    }, 0)
    .toFixed(2);

  if (cartitems == {}) {
    return <div>vacio</div>;
  }
  const handleCLick = async (item) => {
    const remuveitem = cartitems.filter((products) => products.id != item.id);
    const remuvecartid = cartid.filter((id) => id != item.id);
    setCartid(remuvecartid);
    setCartitems(remuveitem);
    cartcontext.setCart(remuvecartid);
    await cartEdit(context.data.user.cart, {
      id: context.data.user.cart,
      games: remuvecartid,
    });
  };
  async function handlePay () {
    await axios
      .post("https://games-proyecti.onrender.com/user/facture/", {
        total: pricetotal,
        user: context.data.user.id,
        games: cartcontext.cart,
      })
      .then((res) => {
        cartEdit(context.data.user.cart, {
          id: context.data.user.cart,
          games: [],
        });
        cartcontext.setCart([]);
        setCartitems([]);
        navigate("/");
        window.location.reload(true);
      });
  };

  return (
    <main>
      <section className="cart-content">
        <article>
          <h3>Shopping Cart</h3>
          <hr />
          <div className="cart-header">
            <p className="cart-item">Item</p>
            <p className="cart-price">Price</p>
            <p className="cart-delete">Delete</p>
          </div>
          <div className="cart-items">
            {cartitems.map((item) => (
              <Cartitem item={item} handleCLick={handleCLick} />
            ))}
          </div>
        </article>
        <article>
          <h3>Orden Summary</h3>
          <div className="orden-summary">
            <div className="summary-detail">
              <p>SUBTOTAL</p>
              <span>${pricetotal}</span>
            </div>
            <div className="summary-detail">
              <p>SHIPPING</p>
              <span>$0.00</span>
            </div>
            <div className="summary-detail">
              <p>ESTIMATED TAX</p>
              <span>${(pricetotal * 0.06).toFixed(2)}</span>
            </div>
            <hr />
            <div className="summary-detail">
              <span>TOTAL</span>
              <span>${(pricetotal * 1.06).toFixed(2)}</span>
            </div>
            <button className="summary-checkout" onClick={() => handlePay}>CHECKOUT</button>
          </div>
        </article>
      </section>
    </main>
  );
}
