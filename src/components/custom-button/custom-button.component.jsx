import React from 'react';
import './custom.button.styles.scss';

const CustomButton = ({children, signedWithGoogle, inverted, ...otherProps}) =>(
    <button className={` ${inverted ? 'inverted' : ''} ${signedWithGoogle ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;