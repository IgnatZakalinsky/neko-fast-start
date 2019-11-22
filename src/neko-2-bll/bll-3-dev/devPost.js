import {setMethod, setToServerData, setUrl} from "../bll-2-logic/actionCreators";
import {METHOD_POST} from "../bll-1-base/initialState";
import {sendDataThunk} from "../bll-2-logic/thunkCreators";

export const devPost = (dispatch) => {
    dispatch(setUrl('http://localhost:3005/users')) ;
    dispatch(setToServerData(
`{
"test": "Neko"
}`
    ));
    dispatch(setMethod(METHOD_POST));
    dispatch(sendDataThunk())
};
