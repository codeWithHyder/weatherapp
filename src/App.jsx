import { useEffect,useState } from 'react'
import React, { createContext } from 'react';
import Header from "./components/Header"
import Table from "./components/Table"
import Weather from './components/Weather';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const MyContext = createContext();

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
    useEffect(()=>{
        const fetchData= async ()=>{
            // const res= await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=77e5b8ccb8edd72b33b91391ab6178d7');
            const res= await fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100');
            const data= await res.json();
            
            setWeatherData(data.results);
            setFilteredData(data.results);
             console.log('weather data',data)
        }
        fetchData();
        
    },[])
  
  return (
    <Router>
      <div>
        <Header weatherData={weatherData} setFilteredData={setFilteredData} />
        <Routes>
          <Route path="/" element={<Table data={filteredData} />} />
          <Route path="/weather/:cityId" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
