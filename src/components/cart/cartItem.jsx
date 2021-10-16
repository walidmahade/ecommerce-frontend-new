import React from "react";
import closeIcon from "../../images/icon-close.svg";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="img">
        <img
          height={70}
          width={"auto"}
          src="/assets/images/products/product-image-almonds.webp"
          alt="prod-img"
        />
      </div>
      <div className="info">
        <div className="title">Product title</div>
        <div className="price">12$</div>
      </div>
      <div className="quantity-update">
        <button>+</button>
        <input type="text" value={0} />
        <button>-</button>
      </div>
      <div className="remove-form-cart">
        <img src={closeIcon} alt="clsoeicon" />
      </div>
    </div>
  );
};

export default CartItem;
