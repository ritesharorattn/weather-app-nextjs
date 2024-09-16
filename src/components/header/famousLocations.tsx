import famousLocations from "@/config/famousLocation.json";

const FAMOUS_LOCATIONS =()=>{
    let famousLocationHTML = famousLocations.map((location,i)=>(
        <button type="button" key={`home-${location.key}`} className="text-left border p-2 col-span-12">
            {location.name}
        </button>
    ))

    return (
        <div className="col-span-2 absolute top-20 right-10 w-[200px]  bg-sky-500 grid grid-cols-12" >
            {/* {famousLocationHTML} */}
        </div>
    )
}
export default FAMOUS_LOCATIONS;