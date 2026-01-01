
import SearchBox from './searchbox.jsx';
import InfoBox from './infobox.jsx';
import {useState} from 'react';
export default function Weather(){
    const [weatherInfo , setWeatherInfo]= useState({
         
        city : "DELHI",
        temp :25.05,
        tempMin :25.05 ,
        tempMax :25.05 ,
        humidity : 47,
        feels_like : 24.84,
        weather : "haze" ,
    
    })

    let updateWeather=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
     
    return(
        <div style={{textAlign: "center"}}>
            <h2 style={{marginLeft:"600px"}}>Weather App</h2>
            <SearchBox updateWeather={updateWeather}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}