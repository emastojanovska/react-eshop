import React from 'react';
import {CustomButtonContainer} from './custom-button.styles'

const CustomButton = ({children, ...props}) =>(
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>

    //If we didn't use styled components 
    //then we'd need the classname of the button written in the following way:
    //className={` ${inverted ? 'inverted' : ''} ${signedWithGoogle ? 'google-sign-in' : ''} custom-button`} 
)

export default CustomButton;