import {setMethod, setToServerData, setUrl} from "../bll-2-logic/actionCreators";
import {METHOD_GET} from "../bll-1-base/initialState";
import {sendDataThunk} from "../bll-2-logic/thunkCreators";

export const devGet = (dispatch) => {
    dispatch(setToServerData(
`{

}`
    ));
    dispatch(setMethod(METHOD_GET));
    dispatch(sendDataThunk())
};
