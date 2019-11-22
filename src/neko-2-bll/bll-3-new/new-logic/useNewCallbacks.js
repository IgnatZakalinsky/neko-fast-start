import {useDispatch} from "react-redux";
import {useMemo} from "react"
import {setData} from "./newActionCreators";

export const useNewCallbacks = () => {
    const dispatch = useDispatch();

    return useMemo(() => ({
        setData: data => dispatch(setData(data)),
    }), [dispatch])
};
