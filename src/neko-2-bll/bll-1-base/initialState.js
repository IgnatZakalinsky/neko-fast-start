export const LOGIC_SEND_MESSAGE = 'TEST/LOGIC_SEND_MESSAGE';
export const LOGIC_SENDING = 'TEST/LOGIC_SENDING';
export const LOGIC_SUCCESS = 'TEST/LOGIC_SUCCESS';
export const LOGIC_ERROR = 'TEST/LOGIC_ERROR';

export const initialState = {
    url: 'http://localhost:3005/users',
    toServerData:
`{
    "login": "name"
}`,
    fromServerData: 'test data from server',
    logicState: LOGIC_SEND_MESSAGE
};
