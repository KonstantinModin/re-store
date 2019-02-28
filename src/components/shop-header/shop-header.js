import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css';

const ShopHeader = ({ numItems, total}) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">Re-Store
                    </div>
            </Link>
            <Link to="/cart" className="shopping-cart">
                <span>
                    <i className="cart-icon fa fa-shopping-cart"></i>
                    {numItems} items (${total}) 
                </span>
            </Link>
        </header>
    )
};

export default ShopHeader;