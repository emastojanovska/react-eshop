export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingItem = cartItems.find(cartItem => cartItem.id == cartItemToAdd.id);

    if(existingItem){
        //map() returns a new array in order to rerender the component.
        return cartItems.map(cartItem => cartItem.id==cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, {...cartItemToAdd, quantity:1} ]
}