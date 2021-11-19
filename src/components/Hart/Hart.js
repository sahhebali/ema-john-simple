import React from 'react';

const Hart = (props) => {
    const { cart } = props;


    const totalReduser = (previus, product) => previus + product.price;
    const total = cart.reduce(totalReduser, 0)
    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price
    // }

    const shiping = 15
    const tax = (total + shiping) * 10;
    const grandTotal = total + shiping + tax

    return (
        <div>
            <h3>  Orddered Ssummary</h3>
            <h5>Items Ordered {props.cart.length}</h5>
            <h6>total : {total.toFixed(2)}</h6>
            <p>Shipinng: {shiping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Hart;