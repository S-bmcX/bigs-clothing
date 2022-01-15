import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}
        /> 
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
);

export default MenuItem;