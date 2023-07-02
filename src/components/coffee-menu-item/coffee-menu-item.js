import './coffee-menu-item.scss'
import coffee from '../../icons/menu.png'
import Col from 'react-bootstrap/Col';


const CoffeeMenuItem = (props) => {
   const { name, price } = props;
   return (
      <Col xs={6} md={4}>
         <div className="menu__item">
            <div className="menu__img"><img src={coffee} alt="coffee" /></div>
            <div className="menu__header">AROMISTICO Coffee 1 kg</div>
            <div className="menu__item-wrapper">
               <span className="menu__type">{name}</span>
               <span className="menu__price">{`${price} $`}</span>
            </div>
         </div>
      </Col>
   )
}

export default CoffeeMenuItem;