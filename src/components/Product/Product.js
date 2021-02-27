import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img,name,price,seller,stock} = props.product;
    return (
        <div className='product'>
            <div className="img-div">
                <img src={img} alt=""/>
            </div>
            <div className="details-div">
                <h4 className='title'>{name}</h4>
                <br/>
                <p><small>by:{seller}</small></p>
                
                <p>${price}</p>
                
                <p><small>only{stock} left in stock - order soon</small></p>
                <button className='cartBtn'
                     onClick={() => props.addEventHandler(props.product)}
                >
                    <FontAwesomeIcon 
                 icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;