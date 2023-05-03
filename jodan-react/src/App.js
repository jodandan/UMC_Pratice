import React ,{useEffect} from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Header from './Header';
import Education from './Education';
import Career from './Career';
import Home from './Home';

import Headerunder from './Headerunder';

// import Slideshow from './Slideshow';
// import Inflearn from './Inflearn'; 

import './Inflean.css';
function App() {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/career" component={Career} />
      </Routes>
    </Router>
    <Headerunder/>
    </div>
  );
}

export default App;