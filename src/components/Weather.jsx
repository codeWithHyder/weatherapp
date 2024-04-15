import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
     const { cityId } = useParams();
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=77e5b8ccb8edd72b33b91391ab6178d7`);
            const data = await res.json();
            setWeatherData(data)
            console.log('weather details data',data);
        } 
        fetchData();
    },[cityId]);
  return (
    <div className='text-center bg-yellow-100'>
      
        {!weatherData ? <p>loading..</p>
        :(
            <div className='text-lg font-extrabold'>
             <h1 className='bg-red-400 py-2'>CityName: {weatherData.name}</h1>
             <p className='bg-green-200 py-2'>Gust:{weatherData.wind.gust}</p>
             <p className='bg-yellow-200 py-2'>Wind: {weatherData.wind.speed}</p>
             <p className='bg-red-400 py-2'>humidity: {weatherData.main.humidity}</p>
             <p className='bg-purple-400 py-2'>Temperature: {weatherData.main.temp}</p>
             <p className='bg-green-400 py-2'>Pressure: {weatherData.main.pressure}</p>
           </div>
           )
         
        }
      
        <div>
            {
               !weatherData ?<p>some issue </p>: weatherData.weather.map((weatherItem)=>{
                   return(
                    <div className='text-lg font-extrabold'>
                     <p className='bg-red-400 py-1'>Weather:{weatherItem.main}</p>
                     <p className='bg-green-600 py-2'>Description:{weatherItem.description}</p>
                     </div>
                   )
                })
            }
            <div className='m-auto my-5 text-lg mx-5 cursor-pointer bg-red-500 rounded p-2'><Link to="/">Go to main Page</Link></div>
        </div>
      
    </div>
  )
}

export default Weather
