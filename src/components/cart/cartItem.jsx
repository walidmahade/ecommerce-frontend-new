import React from "react";
import closeIcon from "../../images/icon-close.svg";
import PRODUCTS from "../../Data/products";
import { decrement, increment, removeProductFromCart } from "./cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, quantity }) => {
  const dispatch = useDispatch();
  // get product
  const getProductById = PRODUCTS.filter((item) => item.id === id);
  let target = getProductById[0];

  const handleQuantityChange = () => {
    console.log(`Update quantity`);
  };

  const handleRemoveProductFomCart = () => {
    console.log(`Product with ${id} was removed from cart.`);
    dispatch(removeProductFromCart({ id, price: target.price }));
  };

  return (
    <div className="cart-item">
      <div className="img">
        <img
          height={70}
          width={"auto"}
          src={target.featured_img}
          alt="prod-img"
        />
      </div>

      <div className="info">
        <div className="title">{target.title}</div>
        <div className="price">{target.price}</div>
      </div>

      <div className="quantity-update">
        <button
          onClick={() =>
            dispatch(increment({ id, quantity: 1, price: target.price }))
          }
        >
          +
        </button>
        <input type="text" value={quantity} onChange={handleQuantityChange} />
        <button
          onClick={() =>
            dispatch(decrement({ id, quantity: 1, price: target.price }))
          }
        >
          -
        </button>
      </div>

      <div className="remove-form-cart" onClick={handleRemoveProductFomCart}>
        <img src={closeIcon} alt="close-icon" />
      </div>
    </div>
  );
};

export default CartItem;
