import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1>This is my Header </h1>
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Order">order</a>
                <a href="manege-inventory">manege-inventory</a>
            </nav>
        </div>
    );
};

export default Header;