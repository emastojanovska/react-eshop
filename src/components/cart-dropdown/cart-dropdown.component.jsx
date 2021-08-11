import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)}
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)
 
const MapStateToProps = ({cart: {cartItems}}) =>({
    cartItems
})
export default connect(MapStateToProps)(CartDropdown);