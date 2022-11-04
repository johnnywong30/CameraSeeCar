import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes';
import Nav from './components/Nav';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav />
      </div>
        <div className='App-body'>
          <Routes />
        </div>
    </Router>
  )
}

export default App;
