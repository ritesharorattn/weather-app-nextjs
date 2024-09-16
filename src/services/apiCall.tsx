/**
 * Import required functions 
 */
import APIS from "@/config/apis.json"

/**
 * Function to exponse and called for api call in whole APP
 */
const callApi = async (key: string, body?: Object, query?: Object) => {
    let ALL_APIS:any = APIS;

    // VALIDATE KEY
    let API_INFO = ALL_APIS[key];
    if (!API_INFO || !API_INFO.URL) {
        return { error: true, message: "Invalid key" }
    }
    console.log(API_INFO)
    // handle optional parameters
    body = body ? body : {}
    query = query ? query : {}

    //PREPARE URL
    let URL = `${ALL_APIS.SERVER_URL}${API_INFO.URL}`

    // start preparing fetchOBJ
    let fetchObj: any = {
        method: API_INFO.METHOD,
        headers: API_INFO.HEADERS ? API_INFO.HEADERS : { 'Content-Type': 'application/json' }
    }

    //add body if method is post , put
    if (["POST", "PUT"].includes(API_INFO.METHOD)) {
        fetchObj.body = JSON.stringify(body);
    }
    console.log("RRRRRRRRRRRRR",URL)

    try {
        let response: any = await fetch(URL, fetchObj);
        let responseInfo:any = await response.json()

        // if error thrown from server side
        if (response.status == 400) {
            return { error: true, message: responseInfo.message ? responseInfo.message : "Error occur during api call" };
        }

        // if error is returned from server side with 200 status
        if (responseInfo.error) { 
            return responseInfo.error;
        }

        let responseMSG = responseInfo.message;
        delete responseInfo.message;

        // if things went fine then return object
        return {
            error: false,
            message: responseMSG ? responseMSG : "",
            data: responseInfo
        }

        
    } catch (err) {
        return { error: true, message: "Error occur during api call", data: err };

    }


}

export { callApi }