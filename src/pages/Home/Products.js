import React, { useRef } from 'react'
import Banner from '../../compomnents/home/Banner'
import CartCountbtn from '../../compomnents/common/Cartcountbtn/CartCount'
// import Footer from '../../compomnents/common/Footer/Footer'
import Menu from '../../compomnents/common/Menu/Menu'
import { menuItemsData } from '../../compomnents/common/Menu/Data'


export default function Product() {
  const menuRef=useRef();
  const handlescrollMenu=()=>menuRef.current.scrollIntoView({behaviour:"smooth"});
  return (
    <div>
       {/* Banners components */}
       <Banner handlescrollMenu={handlescrollMenu} />
     {/* menu componnents */}
      <Menu list={menuItemsData} ref={menuRef}/>
     {/* footer components  */}
     {/* <Footer/> */}
     {/* cart count components  */}
     <CartCountbtn/>
       
        
    </div>
  )
}
