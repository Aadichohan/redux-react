
import { SELL_SOAP, BUY_SOAP, SELL_SURF, BUY_SURF } from "../actions";
const shopReducer = (state = {soap : 10, surf : 10}, action) =>{
    if(action.type == SELL_SOAP){
        return {
            soap : state.soap  -  action.payload.soap,
            surf : state.surf
        };
    }
    else if (action.type == BUY_SOAP){
        return {
            soap : state.soap + Number(action.payload.soap),
            surf : state.surf
        }
    }   
    else if(action.type == SELL_SURF){
        return {
            surf : state.surf  -  action.payload.surf,
            soap : state.soap
        };
    }
    else if (action.type == BUY_SURF){
        return {
            surf : state.surf + Number(action.payload.surf),
            soap : state.soap
        }
    }
    return state;
}
export default shopReducer;