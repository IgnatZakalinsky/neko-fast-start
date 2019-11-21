import * as axios from "axios";

export const TestAPI = {
    getTest(url) {
        return axios.get(url);
    }

};
