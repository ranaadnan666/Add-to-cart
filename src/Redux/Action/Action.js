 import {ADD_TO_CART} from '../Constan'
 import {REMOVE_TO_CART } from '../Constan'
 import {CART_CLEAR_ITEM } from '../Constan'
 export const cartAddItem=(item)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        payload:item
    }
}
export  const cartRemoveItem=(item)=>{
    return {
        type:REMOVE_TO_CART,
        payload:item
    }
}

export const cartclearItem = (item) => ({
    type: CART_CLEAR_ITEM,
    payload: item,
  });
  