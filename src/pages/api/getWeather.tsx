import { get12HoursWeather,get5DaysForcast, getWeather  } from "./services/weatherService";

export default async function handler(req:any, res:any) {
    try{
        let weatherInfo;
        if(req.body.type === "12upcominghours"){
            weatherInfo = await get12HoursWeather({key:req.body.key});
        }else if(req.body.type ==='5upcomingdays'){
            weatherInfo = await get5DaysForcast({key:req.body.key});
        }else{
            weatherInfo = await getWeather({key:req.body.key});
        }
        console.log(">>>weatherInfo",weatherInfo)
        res.status(200).json(weatherInfo);

    }catch(err){
        console.log("err in getting weather",err)
    }
}
  