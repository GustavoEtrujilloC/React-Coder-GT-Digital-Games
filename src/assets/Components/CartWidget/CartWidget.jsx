
import {FaShoppingBag} from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';


const CartWidget = ({counter}) => {
  return (
    <div style={{display:'flex'}}>

      <Badge bg="danger">{counter}</Badge>
      <FaShoppingBag fontSize={24} color='white' />

    </div>
    
  )
}

export default CartWidget