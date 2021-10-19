import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";
import CartItem from "./cartItem";

const Cart = () => {
  const cartItemCount = useSelector((state) => state.cart.quantity);
  const cartTotal = useSelector((state) => state.cart.total);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className={"cart"}>
      <h3>Cart</h3>
      <div>
        Items: <b>{cartItemCount}</b>, Total: <b>{cartTotal}$</b>
      </div>

      <br />
      <br />

      {products.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Cart;
