import React from "react";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  // increment,
  // incrementByAmount,
} from "../cart/cartSlice";

const Product = (props) => {
  let { id, title, price, featured_img } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = (quantity, price, productId) => {
    // dispatch(increment());
    // dispatch(incrementByAmount({ target: "total", amount: price }));
    dispatch(
      addProductToCart({
        quantity,
        price,
        productId,
      })
    );
  };

  return (
    <article className={"product"} data-product-id={id}>
      <div className="prod-img">
        <img src={featured_img} alt="prod img" height={60} />
      </div>
      <div className="prod-title">
        <h3>{title}</h3>
      </div>
      <p className={"price"}>{price}$</p>
      <button onClick={() => handleAddToCart(1, price, id)}>Add to cart</button>
    </article>
  );
};

export default Product;
