import {useState} from "react"

var path = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var city = 'lisle';
var zipcode = '60532';
var countrycode = 'USA';
var key = 'a1ff59fe7bfbac4b4a1bbc981c33e490';

const Location = () => {
    return (
        <div className = "container">
        <div>
            Address
            <input id = "address">
            </input>
        </div>
        <div>
            City
            <input id = "city">
            </input>
        </div>
        <div>
            Zip Code
            <input id = "zipcode">
            </input>
        </div>
        <div>
            <button id = "Submit"> 
            Submit
            </button>
        </div>
    </div>
    );
};

export default Location;