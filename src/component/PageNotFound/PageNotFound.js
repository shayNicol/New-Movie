import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';


const PageNotFound = () => {
    return (
        <nav>
    <div className='pagenot'>
    <h1>404 PAGE NOT FOUND</h1>
    <p> Sorry this page can't be found please go back</p>
    <div className='homenot'>
    <Link to="/">Go Home</Link>
</div>
    </div>
        </nav>
    
    );
};

export default PageNotFound;