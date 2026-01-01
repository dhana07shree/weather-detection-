import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './searchbox.css'
import { useState } from 'react';


export default function SearchBox({updateWeather}){
    let [city , setCity]= useState("");
     let [error , setError]= useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="63b7b6cdd8e03ead03950bdeb6688c46";
    
    let getWeatherInfo = async ()=>{
        
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse= await response.json();
       console.log(jsonResponse);
       let result={
        city:city,
        temp : jsonResponse.main.temp,
         tempMin : jsonResponse.main.temp_min,
          tempMax : jsonResponse.main.temp_max,
           humidity : jsonResponse.main.humidity,
            feels_like : jsonResponse.main.feels_like,
             weather : jsonResponse.weather[0].description,
       };
       console.log(result);
        if (jsonResponse.cod==404){
            throw new Error("city not found");
        }
        return result;
       
    }
    
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        try{
        event.preventDefault();
        console.log("submit");
        setCity("");
        setError(false);
       let newinfo= await getWeatherInfo();
       updateWeather(newinfo);
        }
       catch(err){
              setError(true);
       }
       
    }
    return(
        <div className='SearchBox'>
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
                
            </form>
            {error && <p style={{color : "red"}}>Not a valid city</p>}
        </div>
    )
}