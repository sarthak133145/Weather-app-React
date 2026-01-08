import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Weather.css"




export default function WeatherInfo({detail}){
   let rain_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let hot_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_URL="https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=2048x2048&w=is&k=20&c=Bk3suOKOiKC1gyNbFjlHqYrGB-OyHUwyJu_7Ncujcd8="
    return(
        <div>
        <div className='weatherInfo'>
            
             <Card sx={{ width: "100%", maxWidth: 420  }}>
      <CardMedia
        sx={{ height:220  }}
        image={
  detail?.main?.temp <= 10
    ? cold_URL
    : detail?.main?.humidity >= 70
    ? rain_URL
    : hot_URL
}

      />
      <CardContent sx={{ padding: 3}}>
        <Typography gutterBottom variant="h5" component="div">
        {detail?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         🌡 Temperature: {detail?.main?.temp} °C <br />
          💧 Humidity: {detail?.main?.humidity}% <br />
          🔼 Max Temp: {detail?.main?.temp_max} °C <br />
          🔽 Min Temp: {detail?.main?.temp_min} °C<br></br>
          The weather can describe as <i>{detail?.weather?.[0]?.description}</i><br></br>
           and feels like {detail?.main?.feels_like} °C
          
        </Typography>
      </CardContent>
      
    </Card>
           
        </div>
         </div> 
    )
}