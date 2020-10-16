import React from 'react';

//componentes
import Navbar from './components/navbar'

import {HashRouter} from 'react-router-dom'

import Routes from './routes'

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Navbar />
        <Routes />
    </div>
    </HashRouter>
  );
}

export default App;
