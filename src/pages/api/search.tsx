import { getLocations } from "./services/weatherService";

export default async function handler(req:any, res:any) {
    let locations = await getLocations(req.body.location)
    res.status(200).json(locations);
}
  