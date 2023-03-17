import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsCount } from '../../../../Redux/Action/Selecter'
import {cartAddItem,     cartRemoveItem } from '../../../../Redux/Action/Action'
import ButtonAddRemoveItem from '../../Buttonaddremoveitem'
//  import { menuItemsData } from '../Data'
import './Style.css'
 const MenuItem = ({props,cartCount,cartList, cartAddItem, cartRemoveItem}) => {
  const {id,name,info,img,price}=props
// console.warn("store data",props)
const handleQuantity = () => {
  let quantity = 0;
  if (cartCount !== 0) {
    const foundItemInCart = cartList.find((item) => item.id === id);
    if (foundItemInCart) {
      quantity = foundItemInCart.quantity;
    }
  }
  return quantity;
};
   
  return (
    <div  className='itemNumber'>
      <img src={img} alt=''/>
      <div className='item-head-desc'>
      <p className='head-desc-name'>{name}</p>
      <p className='item-head-desc'>{id}</p>

      <p className='head-desc-info'><small>{info}</small></p></div>
     <div className='item-foot-desc'>
     <span className='foot-desc-price'>${price}</span>
     <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(props)}
          handleAddItem={() => cartAddItem(props)}
        />
     {/* onClick={()=>props. addToCartHandler({price:100,name:"in phone"})}> */}
     </div>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartCount:selectCartItemsCount,
  cartList:selectCartItems,

  });

  const mapDispatchToProps = (dispatch) =>({
    cartAddItem:item=>dispatch(cartAddItem(item)),
    cartRemoveItem:item=>dispatch(cartRemoveItem(item)),

  })
export default connect(mapStateToProps,mapDispatchToProps) (MenuItem);
