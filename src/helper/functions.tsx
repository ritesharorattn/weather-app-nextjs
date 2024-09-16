import { callApi } from "@/services/apiCall"

const getAndSetCurrentWeather = async (key:string,setCurrentWeather:Function)=>{
    if (key) {
        let { data } = await callApi("GET_WEATHER", { key: key });
        let weatherObj = { ...data[0], temprature: Math.floor(data[0].temperatureInC.replace(" C", "")), scale: "C" }
        setCurrentWeather(weatherObj);
    }
}

const getAndset5DaysForcast = async (key:string,setForcast:Function)=>{
    if (key) {
        let { data } = await callApi("GET_WEATHER", { key: key,type:"5upcomingdays" });
        let parsedData = [];
        for(let i=0;i<data.length;i++){
            parsedData.push({
                mintemprature: Math.floor(data[i].minTemperatureInC.replace(" C", "")),
                maxtemprature: Math.floor(data[i].maxTemperatureInC.replace(" C", "")),
                weatherIcon: data[i].weatherIcon,
                weatherText: data[i].weatherText,
                time: data[i].time,
            })
        }  
        setForcast(parsedData) 

    }
}

const getAndSetCurrentLocation = ( setCurrentLocation:Function )=> {
    navigator.geolocation.getCurrentPosition(async function(position) {
        let {data} = await callApi("GET_CURRENT_LOCATION",{lat:position.coords.latitude,lon:position.coords.longitude});
        localStorage.setItem('location',JSON.stringify(data))

        setCurrentLocation(data);
    },function(err){
        alert("Current Location Access is not Allowed, Setting Default");
        // setCurrentLocation({ name: "--", city: "Haryana", country: "IN", key: "" });
    });
}

const searchLocation = async ( searchKey:any,setSearchedLocations:Function )=> {
    if (searchKey) {
        let { data } = await callApi("SEARCH", { location: searchKey });
        setSearchedLocations(data);
    }
}


export { getAndSetCurrentWeather, getAndSetCurrentLocation, searchLocation,getAndset5DaysForcast }