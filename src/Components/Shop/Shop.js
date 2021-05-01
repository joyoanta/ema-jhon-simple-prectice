import React, { useState } from 'react';
import fakedata from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {

    const first10 = fakedata.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const handleAddproduct = (product) => {
        console.log('product added', product);
        const newcart = [...cart, product]
        setCart(newcart)
    }
    const [cart, setCart] = useState([]);

    return (
        <div className='shop-container'>

            <div className="product-container">


                {

                    products.map(pd => <Product handleAddproduct={handleAddproduct} product={pd}></Product>)

                }



            </div>


            <div className="cart-container">

                <Cart cart={cart}></Cart>

            </div>



        </div>
    );
};

export default Shop;