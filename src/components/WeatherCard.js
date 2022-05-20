import React, { useEffect, useState } from 'react';
import './style.css';

const WeatherCard = ({temp, pressure, humidity, weatherType, name, country, sunset, speed}) => {
  const [weatherState, setWeatherState] = useState('');

  useEffect(() => {
    switch(weatherType) {
        case 'Clouds':
            setWeatherState('wi-cloudy');
        break;
        case 'Clear':
            setWeatherState('wi-day-sunny');
        break;
        case 'Haze':
            setWeatherState('wi-fog');
        break;
        case 'Rain':
           setWeatherState('wi-rain');
        break;
        case 'Mist':
            setWeatherState('wi-dust');
        break;
        case 'Smoke':
            setWeatherState('wi-smoke')
        default:
            setWeatherState('wi-day-sunny');
    }
  }, [weatherType]);

  async function determineWeatherIcon() {
    if(weatherType) {
        switch(weatherType) {
            case 'Clouds':
                await setWeatherState('wi-cloudy');
            break;
            case 'Clear':
                await setWeatherState('wi-day-sunny');
            break;
            case 'Haze':
                await setWeatherState('wi-fog');
            break;
            case 'Rain':
                await setWeatherState('wi-rain');
            break;
            case 'Mist':
                await setWeatherState('wi-dust');
            break;
            default:
                await setWeatherState('wi-day-sunny');
         }
    }
  }

  const date = new Date(sunset * 1000);
  const hours = (date.getHours() % 12) || 12;
  const minutes = date.getMinutes();

  return (
        <article className='widget'>
            <div className='weatherIcon'>
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='weatherCondition'>
                        {weatherType}
                    </div>
                    <div className='place'>{name}, {country}</div>
                </div>
            </div>
            <div className='date'>
                {new Date().toLocaleString()}
            </div>
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p>
                            <i className="wi wi-sunset"></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {hours}:{minutes} <br /> Sunset
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className="wi wi-humidity"></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {humidity} <br /> Humidity
                        </p>
                    </div>
                </div>
                <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                        <p>
                            <i className="wi wi-rain"></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {pressure} <br /> Pressure
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className="wi wi-strong-wind"></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {speed} <br /> Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
  );
};

export default WeatherCard;
