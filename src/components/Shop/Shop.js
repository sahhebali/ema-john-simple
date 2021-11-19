import React, { useEffect, useState } from 'react';
import Hart from '../Hart/Hart';

import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>Product : {product.length}</h3>
                {
                    product.map(product => <Product
                        key={product.key}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-contaner">
                <Hart cart={cart}></Hart>
            </div>
        </div>
    );
};

export default Shop;