import React from 'react';
import Home from "./Home";

const HomeContainer = ({data = 'no data'}) => {

    return (
        <Home data={data}/>
    );
};

export default HomeContainer;
