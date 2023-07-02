import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import coffee from '../../icons/menu.png'

import './coffee-filter.scss'

const CoffeeFilter = (props) => {

   const btnData = [
      { name: 'brazil', label: 'Brazil' },
      { name: 'kenya', label: 'Kenya' },
      { name: 'columbia', label: 'Columbia' }
   ]

   const btns = btnData.map(({ name, label }) => {
      const active = props.filter === name;
      const clazz = active ? "btn-liht" : "btn-outline-liht"
      return (
         <button className={`filter__btn ${clazz}`}
            type="button"
            key={name}
         // onClick={() => props.onFilterSelect(name)}
         >
            {label}
         </button>
      )
   })


   return (
      <div className="filter">
         <Container>
            <Row>
               <Col xs={12} md={6}>
                  <div className="filter__search-wrapper">
                     <span className="filter__text">Lookiing for</span>
                     <input type="text" placeholder="start typing here..." className="filter__input" />
                  </div>
               </Col>
               <Col xs={12} md={6}>
                  <div className="filter__search-wrapper">
                     <span className="filter__text-filter">Or filter</span>
                     <div className="filter__btn-group">
                        {btns}
                     </div>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col xs={6} md={4}>
                  <div className="filter__item">
                     <div className="filter__img"><img src={coffee} alt="coffee" /></div>
                     <div className="filter__header">AROMISTICO Coffee 1 kg</div>
                     <div className="filter__item-wrapper">
                        <span className="filter__type">Columbia</span>
                        <span className="filter__price">6.99$</span>
                     </div>
                  </div>
               </Col>
               <Col xs={6} md={4}>
                  <div className="filter__item">
                     <div className="filter__img"><img src={coffee} alt="coffee" /></div>
                     <div className="filter__header">AROMISTICO Coffee 1 kg</div>
                     <div className="filter__item-wrapper">
                        <span className="filter__type">Kenya</span>
                        <span className="filter__price">6.99$</span>
                     </div>
                  </div>
               </Col>
               <Col xs={6} md={4}>
                  <div className="filter__item">
                     <div className="filter__img"><img src={coffee} alt="coffee" /></div>
                     <div className="filter__header">AROMISTICO Coffee 1 kg</div>
                     <div className="filter__item-wrapper">
                        <span className="filter__type">Brazil</span>
                        <span className="filter__price">6.99$</span>
                     </div>
                  </div>
               </Col>
               <Col xs={6} md={4}>
                  <div className="filter__item">
                     <div className="filter__img"><img src={coffee} alt="coffee" /></div>
                     <div className="filter__header">AROMISTICO Coffee 1 kg</div>
                     <div className="filter__item-wrapper">
                        <span className="filter__type">Brazil</span>
                        <span className="filter__price">6.99$</span>
                     </div>
                  </div>
               </Col>
               <Col xs={6} md={4}>
                  <div className="filter__item">
                     <div className="filter__img"><img src={coffee} alt="coffee" /></div>
                     <div className="filter__header">AROMISTICO Coffee 1 kg</div>
                     <div className="filter__item-wrapper">
                        <span className="filter__type">Kenya</span>
                        <span className="filter__price">6.99$</span>
                     </div>
                  </div>
               </Col>
               <Col xs={6} md={4}>
                  <div className="filter__item">
                     <div className="filter__img"><img src={coffee} alt="coffee" /></div>
                     <div className="filter__header">AROMISTICO Coffee 1 kg</div>
                     <div className="filter__item-wrapper">
                        <span className="filter__type">Brazil</span>
                        <span className="filter__price">6.99$</span>
                     </div>
                  </div>
               </Col>
            </Row>

         </Container>
      </div>
   )
}

export default CoffeeFilter;