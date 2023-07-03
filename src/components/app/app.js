import { Component } from 'react';

import CoffeeHeader from '../coffee-header/coffee-header';
import CoffeeDescr from '../coffee-descr/coffee-descr';
import CoffeeFilter from '../coffee-filter/coffee-filter';
import CoffeeFooter from '../coffee-footer/coffee-footer';

import './app.scss';
import CoffeeMenu from '../coffee-menu/coffee-menu';
import CoffeeSearch from '../coffee-search/coffee-search';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Columbia', price: 6.99, id: 1 },
        { name: 'Kenya', price: 5.99, id: 2 },
        { name: 'Brazil', price: 7.99, id: 3 },
        { name: 'Brazil', price: 7.99, id: 4 },
        { name: 'Kenya', price: 5.99, id: 5 },
        { name: 'Brazil', price: 7.99, id: 6 }
      ],
      filter: 'All',
      term: ''
    }
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'Brazil':
        return items.filter(item => item.name === 'Brazil');
      case 'Kenya':
        return items.filter(item => item.name === 'Kenya');
      case 'Columbia':
        return items.filter(item => item.name === 'Columbia');
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  searchProd = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  onFilterSearch = (term) => {
    this.setState({ term })

  }

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(this.searchProd(data, term), filter);
    return (
      <div className="app" >
        <CoffeeHeader />
        <CoffeeDescr />
        <div className="searchFilter">
          <Container>
            <Row>
              <CoffeeSearch onFilterSearch={this.onFilterSearch} />
              <CoffeeFilter filter={filter} onFilterSelect={this.onFilterSelect} />
            </Row>
          </Container>
        </div>
        <div className="menu">
          <CoffeeMenu data={visibleData} />
        </div>
        <div className="footer">
          <CoffeeFooter />
        </div>

      </div>
    );
  }
}

export default App;
