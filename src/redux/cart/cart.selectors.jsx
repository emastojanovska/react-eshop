import { createSelector } from 'reselect';

//1. input selector and 2. output selector that uses createSelector

//input selector
const selectCart = state => state.cart;

//output selector takes 2 args: array of input selector and function that gives us the return value
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

//because we used createSelector to create the selectCartItems selector is now a memoir selector

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalItemsCount, cartItem) => totalItemsCount + cartItem.quantity,0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)