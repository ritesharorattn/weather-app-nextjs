/**Import Support functions */
import { callApi, locationParser, getCurrentWeather, currentLocationParser ,next12HoursWeatherParser,next5DaysForcastParser,getLocationInfoParser } from "./support";

/**
 * Function to get autocomplete location name
 * @param {String} query 
 * @returns 
 */
export async function getLocations(query:string) {
  try{  
    let response = await callApi("location_api","GET",{query},{});
    return locationParser(response)
  }catch(err){
    console.log("Err in getLocations",err);
  }
}

/**
 * Function to get autocomplete location name
 * @param {String} query 
 * @returns 
 */
export async function getLocationInfo(key:string) {
  try{  
    let response = await callApi("get_location_info","GET",{key},{});
    console.log("location info",response)
    return getLocationInfoParser(response)
  }catch(err){
    console.log("Err in getLocations",err);
  }
}


/**
 * Function to get weather for key
 * @param {String} key 
 * @returns 
 */
export async function getWeather(query:object) {
  try{  
    let response = await callApi("current_weather_api","GET",query,{});

    return getCurrentWeather(response)
  }catch(err){
    console.log("Err in getWeather",err);
  }
}


/**
 * Function to get current location from lat/long
 * @param {Object} query
 * @returns 
 */
export async function getCurrentLocations(query:string) {
  try{  
    let response = await callApi("current_location","GET",{query},{});
    console.log("###############",response)
    return currentLocationParser(response)
  }catch(err){
    console.log("Err in getLocations",err);
  }
}


/**
 * Function to get 12 hours forcast for key
 * @param {Object} key 
 * @returns 
 */
export async function get12HoursWeather(query:object) {
  try{  
    let response = await callApi("12hours_forcast","GET",query,{});

    return next12HoursWeatherParser(response)
  }catch(err){
    console.log("Err in getWeather",err);
  }
}

/**
 * Function to get 5 days forcast for key
 * @param {Object} key 
 * @returns 
 */
export async function get5DaysForcast(query:object) {
  try{  
    let response = await callApi("5days_forcast","GET",query,{});

    return next5DaysForcastParser(response)
  }catch(err){
    console.log("Err in getWeather",err);
  }
}

