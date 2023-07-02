import { Component } from 'react';

import CoffeeHeader from '../coffee-header/coffee-header';
import CoffeeDescr from '../coffee-descr/coffee-descr';
import CoffeeFilter from '../coffee-filter/coffee-filter';
import CoffeeFooter from '../coffee-footer/coffee-footer';

import './app.scss';
import CoffeeMenu from '../coffee-menu/coffee-menu';




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
      filter: 'All'
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

  render() {
    const { data, filter } = this.state;
    const visibleData = this.filterPost(data, filter);
    return (
      <div className="app" >
        <CoffeeHeader />
        <CoffeeDescr />
        <div className="filter-menu">
          <CoffeeFilter filter={filter} onFilterSelect={this.onFilterSelect} />
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
