import { getLocationInfo } from "./services/weatherService";

export default async function handler(req:any, res:any) {
    let locationInfo = await getLocationInfo(req.body.key)
    res.status(200).json(locationInfo);
}
  