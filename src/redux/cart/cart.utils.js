export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }
    // the below covers when a new item is added and adds it to cart with a 1 quantity, the above covers when an existing item is re-added to cart (ie increasing quantity of item in cart)
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};