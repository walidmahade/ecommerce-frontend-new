import React from 'react';

const Product = (props) => {
    let { id, title, price, featured_img } = props.data

    return (
        <article className={'product'} data-product-id={id}>
            <div className="prod-img">
                <img src={featured_img} alt="prod img" height={60}/>
            </div>
            <div className="prod-title">
                <h3>{title}</h3>
            </div>
            <p className={'price'}>{price}$</p>
            <button>Add to cart</button>
        </article>
    );
};

export default Product;