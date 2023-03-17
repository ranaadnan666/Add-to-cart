import {createSelector} from 'reselect'
const selectCart = (state) =>state.cart;


export const selectCartItems=createSelector(
    [selectCart],
    (cart) => cart.cartItems 
    );

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    (cartItems) =>
    cartItems.reduce(
(acuumulatedQuantity , cartItem) =>
acuumulatedQuantity + cartItem.quantity,
0
 )
);
export const selectCartTotal=createSelector(
    [selectCartItems],
    (cartItems) =>
    cartItems.reduce(
(acuumulatedPrice , cartItem) =>
acuumulatedPrice + cartItem.quantity * cartItem.price,
0
 )
);