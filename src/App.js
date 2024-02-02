import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Sum from './Sum';
import Calculator from './Calculator';

function App() {
 
  return (
    <div className="App">


      {/* <Sum></Sum> */}
     

      <Calculator></Calculator>
    </div>
  );
}

export default App;
