import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import AllBeers from "./pages/AllBeers"
import RandomBeer from "./pages/RandomBeer"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"
import NewBeer from "./pages/NewBeer"
import BeerDetails from './components/BeerDetails';



function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<AllBeers/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
        <Route path='/beers/:id' element={<BeerDetails/>}/>

        {/* Error routes */}
        <Route path='/error' element={<Error/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
