import React from 'react';
import './Cart.css';

const Cart = (props) => {
   
    const cart = props.cart;
     const total = cart.reduce((total, prd) => total + prd.price , 0);
//    let total = 0;
//    for (let i = 0; i<cart.length; i++){
//        const product = cart[i];
//         total = total + product.price;
//    }


        const formateNumber = num => {

            const precision = num.toFixed(2);
            return Number(precision);
        }


        let shipping = 0; 
        if (total >35){
            shipping = 4.99;
        }
        else if(total>15){

            shipping = 12.99; 
        }
       

        const tax = (total/10);
        const grandTotal = (total+shipping+tax);

    return (
        <div>
            <h3><b>Order Summery</b> </h3>
            <p>Items Ordered : {cart.length}</p>
            <p>Shipping Charge:$ {formateNumber(shipping)} </p>
            <p>Tax + VAT :$ {formateNumber(tax)}</p>
            <p className ='total'>Payable Amount: $ {formateNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;