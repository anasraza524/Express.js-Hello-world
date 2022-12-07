
import { useState } from "react"
import axios from "axios";
import {Typography,Card,CardContent} from '@mui/material';

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
<Card sx={{ maxWidth: 500,height:300 }}>
    <CardContent>
    <form onSubmit={submitHandler}>
                City Name:
                <input type="text" placeholder="enter your city name" required
                    onChange={(e) => { setCityName(e.target.value) }} />

                <button type="submit">get weather</button>
            </form>
        <Typography variant='h3' color='skyblue'> 

        </Typography>
    
        {(weatherData === null) ? null :
                <div>
  <Typography variant='h3' color='skyblue'> 
  City: {weatherData?.city}
</Typography>  <Typography variant='h3' color='skyblue'> 
Temperature: {Math.round(weatherData?.temp)}°C
</Typography>  <Typography variant='h3' color='skyblue'> 
min: {Math.round(weatherData?.min)}°C
</Typography>  <Typography variant='h3' color='skyblue'> 
max: {Math.round(weatherData?.max)}°C
</Typography>  <Typography variant='h3' color='skyblue'> 
humidity: {Math.round(weatherData?.humidity)}°C
</Typography>  <Typography variant='h3' color='skyblue'> 

</Typography>
                   
                 
                  
                </div>
            }
    </CardContent>


</Card>
            
            <br />
            <br />

           
        </div>
    );
}

export default App;



