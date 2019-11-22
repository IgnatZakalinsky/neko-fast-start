import {useDispatch} from "react-redux";
import {useMemo} from "react"
import {devGet} from "./devGet";

export const useDevCallbacks = () => {
    const dispatch = useDispatch();

    return useMemo(() => ({
        devGet: () => devGet(dispatch),
    }), [dispatch])
};
