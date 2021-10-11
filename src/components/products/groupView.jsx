import React from 'react';
import PRODUCTS from "../../Data/products";
import Product from "./product";


const GroupView = () => {
    return (
        <section className={'group-products'}>
            {
                PRODUCTS.map(product => <Product key={product.id} data={product} />)
            }
        </section>
    );
};

export default GroupView;