import axios from 'axios';

const API_KEY = "ba1f03ba51c1de8719bc76a1ce43cdfd";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//middleware
export function fetchWeather(city){
    let url = `${ROOT_URL}&q=${city},US`,
        payload = axios.get(url);
    //actikon stops until promise is resolved
    return {
        type: FETCH_WEATHER,
        payload: payload
    }
}