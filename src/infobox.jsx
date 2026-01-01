import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './infobox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Thunderstorm } from '@mui/icons-material';

export default function InfoBox({info}){
   const IMG_URL="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
   const rainy ="https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW55JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
   const cold="https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
   const hot="https://images.unsplash.com/photo-1561693666-609d8bfdfa1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    return(
        <div className="InfoBox">
           
            <Card sx={{ maxWidth: 345 }} className="Card">
      <CardMedia
        sx={{ height: 140 }}
    image={info.humidity >70 ? rainy : info.temp>15? hot :cold}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="Weather">
            {info.city}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div" className="Weather">
         <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
           <p>Minimum Temperature = {info.tempMin}&deg;C</p>
            <p>Maximum Temperature = {info.tempMax}&deg;C</p>
             <p>Weather can be described as <b>{info.weather}</b> and feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    )
}