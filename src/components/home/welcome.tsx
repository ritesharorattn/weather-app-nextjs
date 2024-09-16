import { useEffect, useState } from "react"

/**
 * @description On basic of current time, show message
 * @returns 
 */
const WELCOME = () => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        let curHr = new Date().getHours()
        if (curHr < 12) {
            setMessage('Good Morning')
        } else if (curHr < 18) {
            setMessage('Good Afternoon')
        } else {
            setMessage('Good Evening')
        }
    })
    return (
        <div className="col-span-3">
            <span className="text-6xl font-black">{message}</span>
        </div>
    )
}
export default WELCOME