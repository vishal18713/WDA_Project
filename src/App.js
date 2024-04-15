import React from 'react';
import Navbar from './components/Navbar';
import './';
import Home from './components/pages/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
       
     
          <Route path='/' exact component={Home} />
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
         
      </Router>
    </>
  );
}

export default App;
