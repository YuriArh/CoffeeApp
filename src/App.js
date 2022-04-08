import {Component} from  'react';

import './App.css';
import Header from './components/header/header';
import DescribeBlock from './components/describeBlock/describeBlock';
import SearchFilter from './components/searchFilter/searchFilter';
import MarketList from './components/market-list/market-list';
import Footer from './components/footer/footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6,99', id: 1},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6,99', id: 2},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6,99', id: 3},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6,99', id: 4},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6,99', id: 5},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6,99', id: 6},
      ],
      term: '',
      filter: 'all'
    }
  }

  searchItem = (items, term) => {
    if (term.length === 0) {
        return items
    }
    return items.filter(item => {
        return item.name.indexOf(term) > -1
    })
}

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  filterPost = (items, filter) => {
    switch (filter) {
        case 'Brazil' :
            return items.filter(item => item.country === 'Brazil');
        case 'Kenya' :
            return items.filter(item => item.country === 'Kenya');
        case 'Columbia' :
            return items.filter(item => item.country === 'Columbia');
         default :   
             return items;
    }
 }
  
  render() {
    const {data, term, filter} = this.state
    const visibleData = this.filterPost(this.searchItem(data, term), filter); 
    return (
    <div className="App">
      <Header/>
      <DescribeBlock/>
      <SearchFilter onUpdateSearch={this.onUpdateSearch}
      onFilterSelect={this.onFilterSelect}
      filter={filter}/>
      <MarketList data={visibleData}/>
      <Footer/>
    </div>
    );
  }
}

export default App;
