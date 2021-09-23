import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect'; 
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems, history, dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ? 
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
            : <span className='empty-message'>Your cart is empty.</span>
        }
        </div>
        <CustomButton onClick = {() => {history.push('/checkout') 
        dispatch(toggleCartHidden())}}>Go to checkout</CustomButton>
    </div>
)
 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));