import React from 'react';
import './custom-btn.styles.scss';

const CustomBtn = ({children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default CustomBtn;