import { act } from "react-dom/test-utils";
import { types } from "../types/types";

export const authReducer = (state  = {}, action) =>{
    console.log(state, action);
    switch (action.type) {
        case types.login:
                return{
                    uid: action.payload.uid,
                    name: action.payload.displayName
                }
         case types.logout:
            return {}       
        default:
            return state;
    }
}