import React from 'react';
import './custom.button.styles.scss';

const CustomButton = ({children, signedWithGoogle, ...otherProps}) =>(
    <button className={` ${signedWithGoogle ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;