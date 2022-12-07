
import { useState } from "react"
import axios from "axios";
import {Typography,Card,CardContent,
TextField,Button,Paper} from '@mui/material';

let baseUrl = ``;
if (window.location.href.split(":")[0] === "http") {
    baseUrl = `http://localhost:3000`;
}


function App() {

    const [weatherData, setWeatherData] = useState(null)
    const [cityName, setCityName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("I am click handler")
        axios.get(`${baseUrl}/weather/${cityName}`)
            .then(response => {
                console.log("response: ", response.data);

                setWeatherData(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })
    }

    return (
        <div>
           
            <Typography variant="h2" color="skyblue" sx={{ml:10}}>
Weather Web
            </Typography>
<Card sx={{ maxWidth: 600,height:300,ml:10 }}>
    <CardContent>
    <form onSubmit={submitHandler}>
                City Name:
                <TextField 
                sx={{pl:5,pr:5}}
                 size="small"
                type="text" placeholder="enter your city name" required
                onChange={(e) => { setCityName(e.target.value) }}>

                </TextField>
              
                <Button variant="outlined">get </Button>
            </form>
        <Typography variant='h3' color='skyblue'> 

        </Typography>
    
        {(weatherData === null) ? null :
                <div>
  <Typography variant='h5' > 
  City: {weatherData?.city}
</Typography>  <Typography variant='h6' > 
Temperature: {Math.round(weatherData?.temp)}°C
</Typography>  <Typography variant='h6' > 
min: {Math.round(weatherData?.min)}°C
</Typography>  <Typography variant='h6' > 
max: {Math.round(weatherData?.max)}°C
</Typography>  <Typography variant='h6' > 
humidity: {Math.round(weatherData?.humidity)}°C
</Typography>  <Typography variant='h6' > 

</Typography>
                   
                 
                  
                </div>
            }
    </CardContent>


</Card>
            
         
            
        </div>
    );
}

export default App;



