/* Import local modules */
import CONFIG from "./../config/config.json"

    // weather_app_key:"OiDxVNtTY2KlZByrCiHRVKcnqmFwAvc4",

/**
 * Function to call Api
 */
export async function callApi(key:string, type:string, params:any, body:object) {
    let Config:any = CONFIG
    let route = Config[key];
    console.log(route)
    params = { ...params, apikey: Config["weather_app_key"] };
    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            route = route.replace(`{${key}}`, params[key]);
            console.log(route);
        }
    }
    return await fetch(route).then((response) => response.json());
}

/**
 * Function to parse locations data to required format
 */
export function locationParser(locations:any) {
    
    return locations.map((location:any) => {
        return {
            name: location.LocalizedName,
            key: location.Key,
            country: location.Country.LocalizedName,
            city: location.AdministrativeArea.LocalizedName,
        };
    });
}

/**
 * Get current name 
 */
export function getLocationInfoParser(data:any) {
    if(data.Code == "ServiceUnavailable"){
        return {error : true,message:data.Message};
    }
    return {name:data.LocalizedName}
}

/**
 * Function to get required data from current location data to required format
 */
export function currentLocationParser(location:any) {
    
        return {
            name: location.LocalizedName,
            key: location.Key,
            country: location.Country.LocalizedName,
            city: location.AdministrativeArea.LocalizedName,
        };
}

/**
 * Function to weather object to required format
 */
export function getCurrentWeather(weather:any) {
    weather = weather[0]
    return [{
        temperatureInC: `${weather.Temperature.Metric.Value} ${weather.Temperature.Metric.Unit}` ,
        temperatureInF: `${weather.Temperature.Imperial.Value} ${weather.Temperature.Imperial.Unit}`,
        weatherText: weather.WeatherText,
        weatherIcon: weather.WeatherIcon,
        time: weather.EpochTime,
    }]
}
/*
 * Function to get 12 hours weather object to required format
 */
export function next12HoursWeatherParser(weathers:any) {
    return weathers.map((weather:any)=>{
        return{
            temperatureInF: `${weather.Temperature.Value.toFixed(2)} F` ,
            temperatureInC: `${((weather.Temperature.Value -32) / 1.8).toFixed(2) } C` ,
            weatherText: weather.IconPhrase,
            weatherIcon: weather.WeatherIcon,
            time:weather.EpochDateTime
        }
    })
    
}

/*
 * Function to get 5 days forcast weather object to required format
 */
export function next5DaysForcastParser(weathers:any) {
    return weathers.DailyForecasts.map((weather:any)=>{
        return{
            minTemperatureInF: `${weather.Temperature.Minimum.Value.toFixed(2)} F` ,
            minTemperatureInC: `${((weather.Temperature.Minimum.Value-32)/ 1.8).toFixed(2)} C` ,
            maxTemperatureInF: `${weather.Temperature.Maximum.Value.toFixed(2)} F` ,
            maxTemperatureInC: `${((weather.Temperature.Maximum.Value-32) / 1.8).toFixed(2)} C` ,
            weatherText: weather.Day.IconPhrase,
            weatherIcon: weather.Day.Icon,
            time:weather.EpochDate
        }
    })
    
}
