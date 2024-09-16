import { getCurrentLocations } from "./services/weatherService";

export default async function handler(req:any, res:any) {
    console.log("req.body",req.body)
    // let locationInfo = await getCurrentLocations(`${req.body.lat},${req.body.lon}`)
    // console.log("locationInfoy",locationInfo)
    res.status(200).json({ name: 'Rohtak', key: '188421', country: 'India', city: 'Haryana' });
}
  