import CoffeeMenuItem from '../coffee-menu-item/coffee-menu-item';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CoffeeMenu = ({ data }) => {
   const elements = data.map(item => {
      const { id, ...itemProps } = item
      return (
         <CoffeeMenuItem
            key={id}
            {...itemProps}
         />

      )
   })
   return (
      <div className="menu">
         <Container>
            <Row>
               {elements}
            </Row>
         </Container>
      </div>
   )
}

export default CoffeeMenu;