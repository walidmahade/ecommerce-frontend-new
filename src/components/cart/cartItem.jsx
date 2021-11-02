import React, { useState } from "react";
import closeIcon from "../../images/icon-close.svg";
import PRODUCTS from "../../Data/products";
import {
  decrement,
  increment,
  removeProductFromCart,
  updateQuantityAndPrice,
} from "./cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, quantity }) => {
  const dispatch = useDispatch();

  // get product
  const getProductById = PRODUCTS.filter((item) => item.id === id);
  let targetProduct = getProductById[0];

  const handleQuantityChange = (e) => {
    console.log(`Update quantity`);
    let newQuantity = Number(e.target.value);
    dispatch(
      updateQuantityAndPrice({ id, newQuantity, price: targetProduct.price })
    );
  };

  const handleQuantityIncrease = () => {
    dispatch(increment({ id, quantity: 1, price: targetProduct.price }));
  };

  const handleQuantityDecrease = () => {
    dispatch(decrement({ id, quantity: 1, price: targetProduct.price }));
  };

  const handleRemoveProductFomCart = () => {
    dispatch(removeProductFromCart({ id, price: targetProduct.price }));
  };

  return (
    <div className="cart-item">
      <div className="img">
        <img
          height={70}
          width={"auto"}
          src={targetProduct.featured_img}
          alt="prod-img"
        />
      </div>

      <div className="info">
        <div className="title">{targetProduct.title}</div>
        <div className="price">{targetProduct.price}</div>
      </div>

      <div className="quantity-update">
        <button onClick={() => handleQuantityIncrease()}>+</button>
        <input
          type="text"
          value={quantity}
          onChange={(e) => handleQuantityChange(e)}
        />
        <button onClick={() => handleQuantityDecrease()}>-</button>
      </div>

      <div className="remove-form-cart" onClick={handleRemoveProductFomCart}>
        <img src={closeIcon} alt="close-icon" />
      </div>
    </div>
  );
};

export default CartItem;
