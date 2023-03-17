import React from 'react'
import './Style.css'
import bannerimg from '../../compomnents/common/Footer/banner.png'
import Logo from '../common/Logo/logo'

export default function Banner({handlescrollMenu}) {
  return (
    <div className='header'>

        <div className='logotext'>
    
        <Logo/>
        <div className='taste'>
          <h1>Delicious foods for Your Cravings</h1>
          <p>We made fresh and healthy meals with different recipes</p>
          <button onClick={handlescrollMenu} className='fas fa-long-arrow-alt-right'>Veiw Menu </button>
          </div>
        </div>
        <div  className='banerimage' >
       <img src={bannerimg} alt=''/>
</div>
    </div>
  )
}
