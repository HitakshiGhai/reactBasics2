import React from "react";

import ProductDate from  './ProductDate.js';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
    return (
        <Card>
            <ProductDate date = {props.date}/>
            <div className="product-item__description">
                <h2>{props.title}</h2>
            </div>
            <button></button>
        </Card>
    );
}

export default ProductItem;