import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
    
    return (
        <div className='header'>
            <div className='navbar1'>
                <button className='navbar'><Link to="/">Home</Link></button>
            </div>
            <h2 className='title'>Movie Card</h2>
            </div>
    );
};

export default Header;

