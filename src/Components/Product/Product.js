import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    //console.log(props.product)

    const { name, img, seller, price, stock } = props.product;

    return (
        <div className='product'>

            <div>
                <img src={img} alt="Product-sample" />

            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p> Price $ {price}</p>
                <p><small>Items remaining {stock} only ! Order Soon ! </small></p>
                <button className="main-button" onClick={()=>props.handleAddproduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>

            </div>


        </div>
    );
};

export default Product;