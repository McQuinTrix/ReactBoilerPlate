import {FETCH_WEATHER} from '../actions/index';

export default function (state=[],action) {
    switch (action.type){
        case FETCH_WEATHER:
            console.log(action.payload);
            if(!action.payload.data){
                return [...state];
            }
            return [action.payload.data, ... state];
            break;
        default:
            return state;
    }
}