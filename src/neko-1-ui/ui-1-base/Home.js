import React from 'react';
import NewComponentContainer from "../ui-3-new-components/NewComponentContainer";

const Home = ({data = 'no data'}) => {
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

            <input/>
            <textarea/>
            <button>get</button>
            send message... / sending... / SUCCESS: answer in console / ERROR: message in console
        </div>
    );
};

export default Home;
