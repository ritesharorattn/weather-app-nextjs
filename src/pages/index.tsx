import React, { useState, useEffect } from "react"

import Layout from "@/layout/layout"
import Header from "@/components/header";
import CURRENT_WEATHER from "@/components/home/currentWeather";
import WELCOME from "@/components/home/welcome";
import ICONS from "@/components/home/icons";
import FORCAST_5_DAYS from "@/components/home/forcast5Days";

import { getAndSetCurrentWeather, getAndset5DaysForcast, getAndSetCurrentLocation } from "@/helper/functions";

const HOME = () => {
    const [currentLocation, setCurrentLocation] = useState({ name: "", city: "", country: "", key: "" });
    const [currentWeather, setCurrentWeather] = useState({ temprature: "", scale: "C", weatherText: "", weatherIcon: 0, time: "" });
    const [forcast,setForcast] = useState([]);

    // call on load once 
    useEffect(() => {
        let location = localStorage.getItem("location");
        if(location){
            setCurrentLocation(JSON.parse(location))
        }else{
            getAndSetCurrentLocation(setCurrentLocation)
        }
    }, [])

    useEffect(() => {
        getAndSetCurrentWeather(currentLocation.key,setCurrentWeather);
        getAndset5DaysForcast(currentLocation.key, setForcast)
    }, [currentLocation.key])


    return (
        <Layout>
            <Header currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
            <section className="p-5 ">
                <div className="grid grid-cols-12">
                    <WELCOME></WELCOME>
                    <ICONS icon={currentWeather.weatherIcon}></ICONS>
                    <div className="col-span-3 col-start-9 h-[550px]">
                        <CURRENT_WEATHER currentLocation={currentLocation} currentWeather={currentWeather} ></CURRENT_WEATHER>
                        <FORCAST_5_DAYS forcast={forcast}></FORCAST_5_DAYS>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default HOME;