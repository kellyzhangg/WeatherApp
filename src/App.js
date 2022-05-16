import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Weather from './components/Header';
import Location from './components/Location';


const api = {
  key: 'a1ff59fe7bfbac4b4a1bbc981c33e490',
  base: 'http://api.openweathermap.org/geo/1.0/direct?q='
}

function App(){
  return (
    <div className = "container">
      <div className = "Title">
        <Weather/>
      </div>
      <div className = "Input">
        <Location/>
      </div>
    </div>
  );
}


export default App;
