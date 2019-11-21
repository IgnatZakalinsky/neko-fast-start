import React from 'react';

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



            {/*test content*/}

            <input/>
            <textarea/>
            <button>get</button>
            send message... / SUCCESS: answer in console / ERROR: message in console
        </div>
    );
};

export default Home;
