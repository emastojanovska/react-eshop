import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ( {toggleCartHidden, cartItems} ) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shoppingIcon'/>
        <span className='item-count'> 0 </span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const MapStateToProps = ({cart: {cartItems} }) =>(
    cartItems
)

export default connect(MapStateToProps, mapDispatchToProps)(CartIcon);