import { Component } from 'react';

import CoffeeHeader from '../coffee-header/coffee-header';
import CoffeeDescr from '../coffee-descr/coffee-descr';
import CoffeeFilter from '../coffee-filter/coffee-filter';
import CoffeeFooter from '../coffee-footer/coffee-footer';

import './app.scss';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = ''
  }
  render() {
    return (
      <div className="app" >
        <CoffeeHeader />
        <CoffeeDescr />
        <div className="filter">
          <CoffeeFilter />
        </div>
        <div className="footer">
          <CoffeeFooter />
        </div>

      </div>
    );
  }
}

export default App;
