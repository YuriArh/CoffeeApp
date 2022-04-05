
import './App.css';
import Header from './components/header/header';
import DescribeBlock from './components/describeBlock/describeBlock';
import SearchFilter from './components/searchFilter/searchFilter';

function App() {
  return (
    <div className="App">
      <Header/>
      <DescribeBlock/>
      <SearchFilter/>
    </div>
  );
}

export default App;
