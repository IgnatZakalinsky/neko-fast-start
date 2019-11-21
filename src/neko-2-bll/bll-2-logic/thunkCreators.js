import {sendData, setFromServerData, setLogicState} from "./actionCreators";
import {LOGIC_ERROR, LOGIC_SENDING, LOGIC_SUCCESS} from "../bll-1-base/initialState";

export const sendDataThunk = () => async (dispatch, getState) => {
    dispatch(setLogicState(LOGIC_SENDING));
    dispatch(sendData());
    try {
        const response = await Promise.resolve({
            url: getState().testState.url,
            toServerData: getState().testState.toServerData
        });

        console.log('response: ', response);
        dispatch(setFromServerData(response));
        dispatch(setLogicState(LOGIC_SUCCESS))
    } catch (e) {
        dispatch(setLogicState(LOGIC_ERROR));
        console.log('error: ', e)
    }

};
