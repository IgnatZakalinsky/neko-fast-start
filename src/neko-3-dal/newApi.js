import * as axios from "axios";

export const NewAPI = {
    getSome(data) {
        // some url
        let newData = 'http://localhost:3005/' + data;

        console.warn('!!! Neko GET !!! url: ', newData);
        return axios.get(newData);
    }

};
