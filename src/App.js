import React, { useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import About from './components/About';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState([]);
  function handleAddCity (city) {
    setCities((prevCities) => {
      return [city, ...prevCities];
    })
  };

  function handleRemoveCity (cityId) {
    setCities((prevCities) => {
      return prevCities.filter((city) => {
        return cityId !== city.id;
      })
    })
  };

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch}/> } />
      <Route path="/" exact render={() => <Cards cities={cities} onRemove={handleRemoveCity}/> } />
      <Route path="/about" component={About}/>
    </div>
  );
}

export default App;
