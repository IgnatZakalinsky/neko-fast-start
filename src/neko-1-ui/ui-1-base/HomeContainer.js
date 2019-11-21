import React from 'react';
import Home from "./Home";
import {useSelector} from "react-redux";
import {selectTestState} from "../../neko-2-bll/bll-1-base/selectors";

const HomeContainer = ({data = 'no data'}) => {
    const testState = useSelector(selectTestState);

    return (
        <Home data={data} testState={testState}/>
    );
};

export default HomeContainer;
