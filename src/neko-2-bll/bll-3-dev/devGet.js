import {setMethod, setToServerData, setUrl} from "../bll-2-logic/actionCreators";
import {METHOD_GET} from "../bll-1-base/initialState";
import {sendDataThunk} from "../bll-2-logic/thunkCreators";

export const devGet = (dispatch) => {
    dispatch(setUrl('http://localhost:3005/users')) ;
    dispatch(setToServerData('{\n\n}'));
    dispatch(setMethod(METHOD_GET));
    dispatch(sendDataThunk())
};
