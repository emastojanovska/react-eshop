import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ( {toggleCartHidden, countNumber } ) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shoppingIcon'/>
        <span className='item-count'> {countNumber} </span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const MapStateToProps = (state) =>(
    //This is a selector and we get a brand new value when the state change,
    //even tho the state is something we don't care about and it doesn't change the 
    //total quantity value. This is bad for performance so we need to store this
    //accumulated value somewhere. Memorisation is cashing of the selectors value.
    //This can be achieved with the library Reselect. Reselect allows us to write these
    //selectors in such a way so that it knows that if the properties that are pulling of
    //the state and using are the same in the sense that their value hasn't change and
    //the output of the selector is not different , then it won't actually pass them
    //into the component.

    //***yarn add reselect***
        // {countNumber: cartItems.reduce( 
        // (totalQuantityItems, cartItem)  => totalQuantityItems + cartItem.quantity, 0)}
      {  countNumber: selectCartItemsCount(state)}
)

export default connect(MapStateToProps, mapDispatchToProps)(CartIcon);