import React from 'react';
import Routes from "./Routes";
import DevHeader from "../ui-2-dev/DevHeader";

const Main = () => {
    return (
        <>
            {/*someComponents for all pages*/}
            <DevHeader show={true}/>

            <Routes/>

            {/*someComponents for all pages*/}
        </>
    );
};

export default Main;
