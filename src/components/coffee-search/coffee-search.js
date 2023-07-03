import Col from 'react-bootstrap/Col';

import './coffee-search.scss'

import { Component } from 'react';

class CoffeeSearch extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: ''
      }
   }

   onFilterSearch = (e) => {
      const term = e.target.value;
      this.setState({ term })
      this.props.onFilterSearch(term)
   }

   render() {
      return (
         <Col md={12} lg={6}>
            <div className="search__wrapper">
               <span className="search__text">Looking for</span>
               <input type="text" value={this.state.term} onChange={this.onFilterSearch} placeholder="start typing here..." className="search__input" />
            </div>
         </Col>
      )
   }
}

export default CoffeeSearch;