import React, { useState } from 'react';
import fakedata from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {

    const first10 = fakedata.slice(0,10)
    const [products, setProducts] = useState(first10)

    return (
        <div className='shop-container'>

            <div className="product-container">

                
                        {

                        products.map(pd=><Product product={pd}></Product>)

                        }

                   
            
            </div>


            <div className="cart-container">

               <h4>This is Cart Section</h4>

            </div>

               
                
        </div>
    );
};

export default Shop;