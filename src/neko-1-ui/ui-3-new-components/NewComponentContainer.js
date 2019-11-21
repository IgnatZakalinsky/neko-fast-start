import React from 'react';
import NewComponent from "./NewComponent";

const NewComponentContainer = ({data = 'no data'}) => {

    return (
        <NewComponent data={data}/>
    );
};

export default NewComponentContainer;
