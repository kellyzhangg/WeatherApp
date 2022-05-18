import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Location from './components/p1/Location';
import Weather from './components/p2/Weather';
import Locationinput from './components/p1/Location_input'

const location_key = 'a1ff59fe7bfbac4b4a1bbc981c33e490';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      lon: '',
      lat: ''
    };
  }

  getLocation = async(e) => {
    e.preventDefault();
    const cityname = e.target.elements.city.value;
    const zipcode = e.target.elements.zipcode.value;

    const api_call_location = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityname},${zipcode}&limit=1&appid=${location_key}`
      );
    const loc_response = await api_call_location.json();
    
    const api_call_weather = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${loc_response[0].lat}&lon=${loc_response[0].lon}&exclude=alerts&appid=${location_key}`
      );
      const weth_response = await api_call_weather.json();

    this.setState({
      city: `${loc_response[0].name} has a latitude of ${loc_response[0].lat} ºN and a longitude of ${loc_response[0].lon} ºW.`,
      weather: `Current Weather: ${weth_response.current.temp}`
    });

    console.log(loc_response);
    console.log(weth_response);
  };
   

  render(){
    return (
      <div className = "App">
        <div className = "Title">
          <Header/>
        </div>
        <Locationinput loadLocation = {this.getLocation}/>
        <Location
          city = {this.state.city}
          lon = {this.state.lon}
          lat = {this.state.lat}
        />
      </div>
    );
  }
}


export default App;
