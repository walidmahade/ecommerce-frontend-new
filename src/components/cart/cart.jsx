import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";
import CartItem from "./cartItem";

const Cart = () => {
  const cartItemCount = useSelector((state) => state.cart.count);
  const cartTotal = useSelector((state) => state.cart.total);

  return (
    <div className={"cart"}>
      <h3>Cart</h3>
      <div>
        Items: <b>{cartItemCount}</b>, Total: <b>{cartTotal}$</b>
      </div>
      <br />
      <br />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default Cart;
