/**
 * import all required submodules and functions
 */
import SEARCHED_LOCATIONS from "@/components/header/searchedLocations";
import { useEffect, useState, FormEvent } from "react";
import { getAndSetCurrentLocation, searchLocation } from "@/helper/functions"

/**
 * This is main header that will be included in page
 * @param {Object} props 
 * @returns 
 */
const HEADER = (props: any) => {
    const [showSearchForm, setShowSearchForm] = useState(false);
    const [searchedLocations, setSearchedLocations] = useState([]);
    const [searchKey, setSearchKey] = useState("")




    return (
        <header className="grid grid-cols-12 p-5">
            <div className="col-span-2">
                <a href="/">
                    <img src="/ttn-logo.png" alt="TTN" />
                </a>
            </div>
            <div className=" text-xl col-span-1 flex items-center justify-start">{props.currentLocation.name}</div>
            <div className="relative font-bold col-span-3 col-start-10 mr-10 grid grid-cols-12 items-center justify-end">
                <button type="button" className={`${!showSearchForm ? "opacity-100 visible" : "opacity-0 invisible"} transition-opacity ease-in-out delay-150 duration-300  absolute right-0 p-2 w-[44px] h-[43px]`} onClick={toggleSearchFrom}><img src="./search.png" /></button>

                <form onSubmit={handleSearchSubmit} className={`${showSearchForm ? "opacity-100 visible" : "opacity-0 invisible"} relative col-span-12 grid grid-cols-12 transition-opacity ease-in-out delay-150 duration-300 `}>
                    <input type="text" value={searchKey} onChange={handleOnChange} name="searchKey" className="border-2 border-black p-2 col-span-12 text-black"></input>
                    <button type="button" className="focus:p-1 border-2 border-black absolute bg-sky-500/70 right-0 p-2 w-[41px] h-[43px]" onClick={toggleSearchFrom}>X</button>
                    <button type="submit" className="focus:p-1 border-2 border-black absolute bg-sky-500/70 right-10 p-2 w-[41px] h-[43px]" ><img src="./search.png" /></button>
                </form>

                <SEARCHED_LOCATIONS searchedLocations={searchedLocations} setNewLocation={setNewLocation}></SEARCHED_LOCATIONS>
                {/* <button type="button" className="w-[30px] h-[30px] bg-[url('/list.png')] mr-10" ></button> 
            <FAMOUS_LOCATIONS></FAMOUS_LOCATIONS> */}
            </div>

        </header>
    )

    function toggleSearchFrom() {
        setShowSearchForm(!showSearchForm);
    }

    function handleOnChange(event: any) {
        setSearchKey(event.currentTarget.value)
    }
    async function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        await searchLocation(formData.get("searchKey"), setSearchedLocations)
    }

    async function setNewLocation(location: any) {
        localStorage.setItem('location',JSON.stringify(location))
        props.setCurrentLocation(location);
        toggleSearchFrom();
        setSearchedLocations([])
        setSearchKey("")
    }

}
export default HEADER;