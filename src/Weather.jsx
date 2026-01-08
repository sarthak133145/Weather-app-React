import "./Weather.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Alert from '@mui/material/Alert';

export default function Weather() {
     let [input, setInput]=useState("");
     let [data,setData]=useState("");
     let[error,setError]=useState("")


    let url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=b7358ae9ce8e17718821e2271dc6014a&units=metric`    
    

    const handleInput=(event)=>{
    setInput(event.target.value);
    }

    const handleSubmit=async(event)=>{

       event.preventDefault();
        let response=await fetch(url);
        let jsonResponse=await response.json();

        if(jsonResponse.cod !=200){
            setError(jsonResponse.message)
            setData("")
        }
        else{
             console.log(jsonResponse);
         setData(jsonResponse)
         setError("")
        }
       
       
       setInput("");    
    }

    
   


    return(
        
        <div className="weatherApp">
             <h2>Weather App</h2>
            <form onSubmit={handleSubmit}>
             <TextField id="city-name" label="City Name" variant="outlined" required value={input} onChange={handleInput}/>
             <br></br><br></br>
             <Button variant="contained" type="submit">Submit</Button>
             
             {data && <WeatherInfo detail={data}/>}
             <div style={{display:"flex",justifyContent:"center"}}>
             {error && <Alert severity="error" sx={{ mt:4, width: "100%", maxWidth: 420 }}>{error}</Alert>}
             </div>
             
           
             
            
            </form>
        </div>
       
       
    )
}