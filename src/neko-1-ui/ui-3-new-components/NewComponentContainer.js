import React from 'react';
import NewComponent from "./NewComponent";
import {useSelector} from "react-redux";
import {selectNewState} from "../../neko-2-bll/bll-1-base/new/newSelectors";

const NewComponentContainer = ({data = 'no data'}) => {
    const newState = useSelector(selectNewState);

    return (
        <NewComponent data={data} newState={newState}/>
    );
};

export default NewComponentContainer;
