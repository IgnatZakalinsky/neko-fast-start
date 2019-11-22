import {useDispatch} from "react-redux";
import {useMemo} from "react"
import {useDevGet} from "./useDevGet";
import {useDevPost} from "./useDevPost";
import {useDevPut} from "./useDevPut";

export const useDevCallbacks = () => {
    const dispatch = useDispatch();

    const devGet = useDevGet(dispatch);
    const devPost = useDevPost(dispatch);
    const devPut = useDevPut(dispatch);

    return useMemo(() => ({
        devGet,
        devPost,
        devPut
    }), [devGet, devPost, devPut])
};
