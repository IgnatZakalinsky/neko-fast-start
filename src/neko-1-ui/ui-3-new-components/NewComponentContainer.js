import React from 'react';
import NewComponent from "./NewComponent";
import {useSelector} from "react-redux";
import {selectNewState} from "../../neko-2-bll/bll-3-new/new-base/newSelectors";
import {useNewCallbacks} from "../../neko-2-bll/bll-3-new/new-logic/useNewCallbacks";

const NewComponentContainer = ({data = 'no data'}) => {
    const newState = useSelector(selectNewState);
    const newCallbacks = useNewCallbacks();

    return (
        <NewComponent data={data} newState={newState} newCallbacks={newCallbacks}/>
    );
};

export default NewComponentContainer;
