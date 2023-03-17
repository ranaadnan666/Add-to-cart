// import React from 'react'
import {  addItemToCart , removeItemFromCart } from '../Action/cart.utis'
import {ADD_TO_CART} from '../Constan'
import {REMOVE_TO_CART} from '../Constan'
import {CART_CLEAR_ITEM} from '../Constan'


const initialState={
    cartItems:[]
}
export default function cartIReducer(state= initialState,action) 
{
switch (action.type){
    case ADD_TO_CART:
        return{
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload) 
        }
        case CART_CLEAR_ITEM:
            return {
              ...state,
              cartItems: state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
              ),
            };
        case REMOVE_TO_CART:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload) 
            }
    
        
        default:
            return state;

}
}