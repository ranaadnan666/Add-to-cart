import React from 'react'
import Picture from './logo.png'
import './logo.css'
export default function Logo() {
  return (
    <div className='logo'>
 <img src={Picture}/>
 <div>
    <span>
        <b>Taste</b>
    </span>
 </div>
 <div>
 <p><b>Restourant & BBQ</b></p>
 </div>
    </div>
  )
}
