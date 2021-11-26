import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Ciudad() {
    const [city, setCity] = useState(undefined);
    const {id} = useParams();
    useEffect(() => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`)
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
                  setCity(ciudad);
                } else {
                  setCity(null);
                }
              });
}, [id])
return <>
{
    city === undefined && <h3>Cargando...</h3>
}
{
    city === null && <h1>Ciudad no encontrada</h1>
}
{
    city && (<div className="ciudad">
    <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
            <div>Temperatura: {city.temp} ºC</div>
            <div>Clima: {city.weather}</div>
            <div>Viento: {city.wind} km/h</div>
            <div>Cantidad de nubes: {city.clouds}</div>
            <div>Latitud: {city.latitud}º</div>
            <div>Longitud: {city.longitud}º</div>
        </div>
</div>
</div>)
}

</>
    
}