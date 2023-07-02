// import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import coffee from '../../icons/menu.png'

import './coffee-filter.scss'

const CoffeeFilter = (props) => {
   // const { name, price } = props
   const btnData = [
      { name: 'All', label: 'All' },
      { name: 'Brazil', label: 'Brazil' },
      { name: 'Kenya', label: 'Kenya' },
      { name: 'Columbia', label: 'Columbia' }
   ]

   const btns = btnData.map(({ name, label }) => {
      const active = props.filter === name;
      const clazz = active ? "filter__btn-active" : ""
      return (
         <button className={`filter__btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}
         >
            {label}
         </button>
      )
   })


   return (
      <div className="filter">
         <Container>
            <Row>
               <Col md={12} lg={6}>
                  <div className="filter__search-wrapper">
                     <span className="filter__text">Looking for</span>
                     <input type="text" placeholder="start typing here..." className="filter__input" />
                  </div>
               </Col>
               <Col md={12} lg={6}>
                  <div className="filter__search-wrapper">
                     <span className="filter__text-filter">Or filter</span>
                     <div className="filter__btn-group">
                        {btns}
                     </div>

                  </div>
               </Col>
            </Row>
            <Row>
            </Row>

         </Container>
      </div>
   )
}

export default CoffeeFilter;