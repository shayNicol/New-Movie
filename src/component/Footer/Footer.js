import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import tmdblogo from  '../images/tmdblogo.svg'

const Footer = () => {
    return (
        <footer>
        <div className='footer'>
            <div className= 'ftext'>
            <h3> Welcome</h3>
           <div>©2022, Movie App</div>
           <Link to="https://www.themoviedb.org/"><img className="header__icon" src={tmdblogo} alt ='logo'/></Link>
           </div>
        </div>
        </footer>
    );
};

export default Footer;