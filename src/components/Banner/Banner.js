import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner d-flex align-items-end mb-5'>
           <div className="banner-text-container container text-white">
                <h1 className='fw-bolder'>Computer Engineering</h1>
                <h4>142,765 Computer Engineers follow this</h4>
           </div>
        </div>
    );
};

export default Banner;