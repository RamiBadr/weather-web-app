import React, { useEffect, useState } from 'react';
import './style.css';
import WeatherCard from './WeatherCard';

const Search = () => {
  const [cityName, setCityName] = useState('');
  const [tempInfo, setTempInfo] = useState({});

  const cityNameHandler = (e) => {
    setCityName(e.target.value);
  }

 async function getWeatherInfo(cityName) {
    if(cityName === '') cityName = 'cairo';
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=9946e9d5cb28094880fd47a9d5c7e99c`;
      let res = await fetch(url);
      let data = await res.json();
      
      const {temp, pressure, humidity} = data.main;
      const {main: weatherType} = data.weather[0];
      const {name} = data;
      const {country, sunset} = data.sys;
      const {speed} = data.wind;

      setTempInfo({temp, pressure, humidity, weatherType, name, country, sunset, speed});

    } catch(err) {
      console.log(err);
    };
  }
  // api.openweathermap.org/data/2.5/weather?q=Cairo&appid=1727035fc9d8c74bd6f01864a7c3abfc
  useEffect(() => {
    getWeatherInfo(cityName);
  }, []);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input 
            type='search' 
            placeholder='City Name...' 
            id="search" 
            onChange={cityNameHandler} 
            value={cityName}/>
            <button className='searchButton' onClick={() => getWeatherInfo(cityName)}>Search</button>
        </div>
    </div>
    <WeatherCard {...tempInfo} />
    </>
  )
};

export default Search;
