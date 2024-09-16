
const SEARCHED_LOCATIONS =(props:any)=>{
    let searchedLocations = props.searchedLocations.map((location:any,i:any)=>(
        <button type="button" onClick={()=>{props.setNewLocation(location) }}  key={`home-${location.key}`} className=" text-left border p-2 col-span-12 grid grid-cols-12">
            <span className="col-span-12 font-black">{location.name}</span>
            <span className="col-span-12 text-sm">{location.city}/ {location.country}</span>
        </button>
    ))

    return (
        <div className="col-span-2 absolute top-16 right-0 w-[350px] z-30 bg-sky-500 grid grid-cols-12" >
            {searchedLocations}
        </div>
    )
}
export default SEARCHED_LOCATIONS;