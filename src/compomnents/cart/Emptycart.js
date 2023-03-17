import React from 'react'
import './Style.css'
import {useNavigate} from 'react-router-dom';

 export default function Emptycart() {
    const navigate=useNavigate();
  return (
    <div className='empty-cart'>
<img className='empty-pic' src="emty.png"  alt=''/>
<button onClick={()=>navigate('/Products')}><i  className='fas fa-long-arrow-alt-left'></i> Shop Now</button>
    </div>
  )
}
