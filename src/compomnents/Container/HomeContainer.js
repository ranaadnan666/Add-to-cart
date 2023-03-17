import { MenuItem } from '../../compomnents/common/Menu/Menuitem/index'
import {connect} from 'react-redux'
// import Home from './pages/Home'
import { addtoCart } from '../../Redux/Action/Action'


const mapStateToProps=state =>({
  cardData:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addtoCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(MenuItem)