import {sendData, setFromServerData, setLogicState} from "./actionCreators";
import {LOGIC_ERROR, LOGIC_SENDING} from "../bll-1-base/initialState";
import {TestAPI} from "../../neko-3-dal/testApi";

export const sendDataThunk = () => async (dispatch, getState) => {
    dispatch(setLogicState(LOGIC_SENDING));
    dispatch(sendData());
    try {
        const response = await TestAPI.getTest(getState().testState.url);
        // Promise.resolve({
        //     url: getState().testState.url,
        //     toServerData: getState().testState.toServerData
        // });

        console.warn('!!! Neko response !!! testResponse: ', response);
        dispatch(setFromServerData(response));
    } catch (e) {
        dispatch(setLogicState(LOGIC_ERROR));
        console.error('!!! Neko error !!! testError: ', e)
    }

};
