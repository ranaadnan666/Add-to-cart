import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Emptycart from '../../compomnents/cart/Emptycart'
import Logo from '../../compomnents/common/Logo/logo'
// import { menuItemsData } from '../../compomnents/common/Menu/Data'
import Menu from '../../compomnents/common/Menu/Menu'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../Redux/Action/Selecter'
import './style.css'
const Cart=({cartCount,cartList,carttotal}) => {
  // console.log(cartCount,cartLtotalist,cart);
  return (
    <div className='Cartcount1'>
      <div className='cart-header'>
        <Logo/>
       
        {cartCount===0?  <Emptycart/>:
        <div className='Order'>
        <h1 className='order-heading'>Your Order</h1>
        <div className='menu-order'>
          <Menu list={cartList}/>
        </div>
        <div className='total-order'><h3>Your Total Order ${ carttotal}</h3></div>
        </div>
        }
       
    
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartCount:selectCartItemsCount,
  cartList:selectCartItems,
  carttotal:selectCartTotal
  });
  export default connect(mapStateToProps)(Cart);

