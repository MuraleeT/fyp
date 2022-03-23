import axios from "axios";

const SIGHTING_API_BASE_URL = "http://localhost:8080/api/v1/sightings";

class SightingService{

    getSightings(){

        return axios.get(SIGHTING_API_BASE_URL);

    }

    createSighting(sighting){

        return axios.post(SIGHTING_API_BASE_URL, sighting);

    }

}

export default new SightingService()