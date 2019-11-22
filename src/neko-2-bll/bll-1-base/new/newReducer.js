import {newInitialState} from "./newInitialState";

export const newReducer = (state = newInitialState, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            return {
                ...state,
                data: action.data
            }
        }

        default: return state
    }
};
