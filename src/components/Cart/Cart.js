import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const itemTotal = cart.reduce((total,product) => total+product.price, 0)
    const shipping = cart.reduce((total,product) => total+product.shipping, 0)
    const tax = ((itemTotal+shipping)*0.10).toFixed(2);
    let grandTotal =  itemTotal+shipping+Number(tax);
    
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Ordered Items:{cart.length}</p>

            <div className='cart-price'>
                <small>Items:{Number(itemTotal).toFixed(2)}</small>
                <small>Shipping & tax:{Number(shipping).toFixed(2)}</small>
                <small>Total before tax:{Number(itemTotal+shipping).toFixed(2)}</small>
                <small>Estimated Tax:{tax}</small>
                <h4>Ordered Total:{grandTotal.toFixed(2)}</h4>
                <button className='cart-btn'>Review your order</button>
            </div>
        </div>
    );
};

export default Cart;