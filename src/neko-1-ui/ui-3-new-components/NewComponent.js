import React from 'react';

const NewComponent = ({data = 'no data'}) => {
    console.log('NewComponentData: ', data);

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <div>New content [</div>
            {/*test content*/}



            {/*test content*/}
            <div>]</div>
        </div>
    );
};

export default NewComponent;
