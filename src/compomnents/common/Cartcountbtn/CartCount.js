import React from 'react'
import './Style.css'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {useNavigate} from 'react-router-dom';
import { selectCartItemsCount } from '../../../Redux/Action/Selecter';
const CartCountbtn=( {cartCount}) =>{
  const navigate=useNavigate();
  return (
    <div className='btn-card-count' onClick={()=>navigate('/Cart')}>
 <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
    <i className='fas fa-shopping-cart'></i>

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartCount:selectCartItemsCount,


  });
  export default connect(mapStateToProps)( CartCountbtn);
