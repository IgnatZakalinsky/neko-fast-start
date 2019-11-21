import {useDispatch} from "react-redux";
import {sendData, setFromServerData, setLogicState, setToServerData, setUrl} from "./actionCreators";

export const useTestCallbacks = () => {
    const dispatch = useDispatch();

    return {
        setUrl: url => dispatch(setUrl(url)),
        setToServerData: toServerData => dispatch(setToServerData(toServerData)),
        sendData: () => dispatch(sendData()),
        // setFromServerData: fromServerData => dispatch(setFromServerData(fromServerData)),
        // setLogicState: logicState => dispatch(setLogicState(logicState))
    }
};
