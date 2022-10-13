import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import pnf from '../images/pnf.jpeg'


const PageNotFound = () => {
    return (
        <div className='404page'>
    <img className="btnn" src={pnf} alt ='notfound'/>
    <div className='back'>
    <Link to="/">Go Home</Link>
    </div>
        </div>
    
    );
};

export default PageNotFound;
