import React, { forwardRef } from 'react' 
import './menu.css'
import Menuitem from './Menuitem';
 const Menu=forwardRef (({list},ref) =>{
  return (
    <main ref={ref} className='main123' >
      {
        list.map((item) => (
         <Menuitem props={item}/>
        )) }
      
    </main>
  );
});
export default Menu