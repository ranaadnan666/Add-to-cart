// import pic12 from '../home/pic12.jpg'
// import pic5 from '../home/pic5.webp'
// // import pic4 from '../home/pic4.jpg'
import './Style.css'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';

// function CarouselFadeExample() {
//   return (
//     <div className='Slider12'>
//     <Carousel fade>
//       <Carousel.Item>
//      <div className='pic123'>
//         <img
//           className="d-block w-100"
//           src="food2.jpg"
//           alt=""
//         />
//       </div>
       
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className='pic123'>
//         <img
//           className="d-block w-100"
//           src="food6.jpg"
//           alt=""
//         />
//         </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className='pic123'>
//         <img
//           className="d-block w-100"
//           src="food1.jpg"
//           alt=""
//         />
//        </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className='pic123'>
//         <img
//           className="d-block w-100"
//           src="food5.avif"
//           alt=""
//         />
//        </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className='pic123'>
//         <img
//           className="d-block w-100"
//           src="pic4.jpg"
//           alt=""
//         />
//        </div>
//       </Carousel.Item>
//       <div/>
//     </Carousel>
//     </div>
//   );
// }

// export default CarouselFadeExample;



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React, { Component } from "react";
import Slider from "react-slick";

export default class Rtl extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true
    };
    return (
      <div data-aos="zoom-in">
        {/* <h2>Right to Left</h2> */}
        <div className="Slider12">
        <Slider {...settings}>
          <div data-aos="fade-up">
            <img className='pic12' src='food1.jpg' alt=''/>
          </div>
          <div>
          <img className='pic12' src='food3.jpg' alt=''/>
            
          </div>
          <div>
          <img className='pic12' src='food4.jpg' alt=''/>
            
          </div>
          <div>
          <img className='pic12' src='pic4.jpg' alt=''/>
            
          </div>
          <div>
          <img className='pic12' src='food2.jpg' alt=''/>
            
          </div>
          <div>
          <img className='pic12' src='food6.jpg' alt=''/>
            
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}