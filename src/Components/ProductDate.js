import React from "react"; 
import './ProductDate.css';

const ProductDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{month:'2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="product-date">
            <div className="product-date_date"></div>
            <div className="product-date_month"></div>
            <div className="product-date_year"></div>
        </div>
    );
};

export default ProductDate;