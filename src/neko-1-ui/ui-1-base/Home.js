import React from 'react';
import NewComponentContainer from "../ui-3-new-components/NewComponentContainer";
import {LOGIC_SEND_MESSAGE, LOGIC_SENDING, LOGIC_SUCCESS} from "../../neko-2-bll/bll-1-base/initialState";

const Home = ({data = 'no data', testState}) => {
    console.log('pageData: ', data);

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            {/*test content*/}
            <NewComponentContainer data={data}/>



            {/*test content*/}

            <input value={testState.url}/>
            <textarea value={testState.toServerData}/>
            <button>get</button>
            {testState.logicState === LOGIC_SEND_MESSAGE ? 'send message...'
                : testState.logicState === LOGIC_SENDING ? 'sending...'
                : testState.logicState === LOGIC_SUCCESS ? 'SUCCESS: answer in console'
                : 'ERROR: message in console'
            }
        </div>
    );
};

export default Home;
