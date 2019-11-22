import {useDispatch} from "react-redux";
import {useMemo} from "react"
import {devGet} from "./devGet";
import {devPost} from "./devPost";

export const useDevCallbacks = () => {
    const dispatch = useDispatch();

    return useMemo(() => ({
        devGet: () => devGet(dispatch),
        devPost: () => devPost(dispatch),
    }), [dispatch])
};
