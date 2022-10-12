import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
                <ul className='navbar'>
                <h3 className='title'>MovieCard App</h3>
                <button><Link to="/">Home</Link></button>
                <input className='searhbar' placeholder='Search Here..'/>
            </ul>
            </div>
    );
};

export default Header;

