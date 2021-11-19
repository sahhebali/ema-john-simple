import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handelAddToCart = (product) => {
        console.log(product)
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
                <h3>orderd Summary</h3>
                <h5>Items ordered</h5>
            </div>
        </div>
    );
};

export default Shop;