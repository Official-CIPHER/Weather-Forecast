const API_KEY =`4dc3beec83e07c22e01559ee06ce59d8`;

const makeIconURL = (iconid)=>`https://openweathermap.org/img/wn/${iconid}@2x.png`

const getFormattedWeatherData = async(city, units="metric") =>{

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL).then((res)=>res.json()).then((data)=>data)
    
    const{weather,main:{temp,feels_like,temp_max,temp_min,humidity,pressure},
    wind:{speed},sys:{country},name,
        }=data;
      

    const{description,icon}= weather[0]
        return{
           description,
           iconURL:makeIconURL(icon),
           temp,
           feels_like,
           temp_max,
           temp_min,
           humidity,
           pressure,
           speed,
           country,
           name,
        };
}

export {getFormattedWeatherData}