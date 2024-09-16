/**
 * @description This will show current weather
 * @param { currentLocation:any, currentWeather:any } props 
 */
const CURRENT_WEATHER = (props:{currentWeather:any,currentLocation:any}) => {
    if(props.currentLocation.key){
        return (
            <div className="grid grid-cols-12 ml-10">
                    <span className="text-8xl font-black col-span-5 before:ml-24 before:rounded-xl before:border-2 before:w-[10px] before:h-[10px] before:block before:shadow-[0_0px_5px_2px_rgba(255,255,255)]">{props.currentWeather.temprature} </span>

                <span className="text-4xl font-black col-span-2 flex items-end">{props.currentWeather.scale}</span>
                <span className="col-span-12"> </span>
                <span className="col-span-12"> {props.currentLocation.name} ( {props.currentLocation.city} )</span>
                <span className="col-span-12"> {props.currentWeather.weatherText}</span>
            </div>
        )
    
    }
}

export default CURRENT_WEATHER;