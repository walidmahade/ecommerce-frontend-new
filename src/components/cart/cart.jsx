import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItemCount = useSelector((state) => state.cart.count);
  const cartTotal = useSelector((state) => state.cart.total);

  return (
    <div>
      <h3>Cart</h3>
      <div>
        Items: <b>{cartItemCount}</b>, Total: <b>{cartTotal}$</b>
      </div>
      <br />
    </div>
  );
};

export default Cart;
