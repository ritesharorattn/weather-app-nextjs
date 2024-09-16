

const FORCAST_5_DAYS = (props: any) => {
    let forcastInfo = props.forcast.map((weather: any, i: any) => (
        <div className=" col-span-12 grid grid-cols-12 m-2 z-0" key={weather.time}>
            <div className="col-span-3">{getDayName(weather.time)}</div>
            <div className="col-span-3">
                    <span className="float-left before:ml-5 before:rounded-xl before:border-2 before:w-[7px] before:h-[7px] before:block">{weather.mintemprature} C</span>
                    <span className="float-left m-1">/</span>
                    <span className="float-left before:ml-5 before:rounded-xl before:border-2 before:w-[7px] before:h-[7px] before:block">{weather.maxtemprature} C</span>
            </div>
            <div className="col-span-1 m-1">
                <img className="weatherIcon w-[30px] h-[30px]" alt="weathericon"  src={`./weather-icons/${weather.weatherIcon}.png`} />
            </div>
            <div className="col-span-5">
                <span className="text-xs">{weather.weatherText}</span>
            </div>
        </div>
    ))

    return (
        <div className="grid grid-cols-12 mt-12  absolute bottom-10" >
            {forcastInfo}
        </div>
    )
    function getDayName(time:number){
        let newTime = time *1000;
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(newTime);
        var dayName = days[d.getDay()];
        return dayName
    }
}
export default FORCAST_5_DAYS;