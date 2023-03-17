import React ,{Component} from 'react'
import './Navbar.css'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Map1 extends Component {
 render(){
  return (
    <div className='Setmap'>
    <div className='map12'>
          <Map google={this.props.google}
          style = {{width :"60%" ,height:"60%"}}
           zoom={10}
           initialCenter = {
            {
              lat:30.157457 ,
              lng: 71.524918
            }
           }
           >
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
    
 </InfoWindow>




</Map>
    </div>
    </div>
  )
 }
}
export default GoogleApiWrapper({
  apiKey: (" AIzaSyCopj9o-5h8SkvM_YgFXfwIdVCf7kLtqy0  ")
  })(Map1)
