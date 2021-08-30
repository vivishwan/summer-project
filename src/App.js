import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import WardDetails from './containers/WardDetails/WardDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/ward-details' exact component={WardDetails} />
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
