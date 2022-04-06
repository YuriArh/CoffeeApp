
import './App.css';
import Header from './components/header/header';
import DescribeBlock from './components/describeBlock/describeBlock';
import SearchFilter from './components/searchFilter/searchFilter';
import MarketList from './components/market-list/market-list';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <DescribeBlock/>
      <SearchFilter/>
      <MarketList/>
      <Footer/>
    </div>
  );
}

export default App;
