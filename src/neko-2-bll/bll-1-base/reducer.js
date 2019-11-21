import {initialState} from "./initialState";
import {
    SEND_DATA,
    SET_FROM_SERVER_DATA,
    SET_LOGIC_STATE,
    SET_TO_SERVER_DATA,
    SET_URL
} from "../bll-2-logic/actionTypes";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_URL: {
            return {
                ...state,
                url: action.url
            }
        }
        case SET_TO_SERVER_DATA: {
            return {
                ...state,
                toServerData: action.toServerData
            }
        }
        case SEND_DATA: {
            return {
                ...state,

            }
        }
        case SET_FROM_SERVER_DATA: {
            return {
                ...state,
                fromServerData: action.fromServerData
            }
        }
        case SET_LOGIC_STATE: {
            return {
                ...state,
                logicState: action.logicState
            }
        }

        default: return state
    }
};
