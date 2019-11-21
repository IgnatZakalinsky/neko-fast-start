import * as axios from "axios";

export const TestAPI = {
    getTest(url, query) {
        let newUrl = url;

        const queryKeys = Object.keys(query);
        if (queryKeys.length) {
            newUrl += '?';

            for (const q of queryKeys) newUrl += q + '=' + query[q] + '&';
            newUrl = newUrl.slice(0, -1);
        }

        console.warn('!!! Neko GET !!! url: ', newUrl);
        return axios.get(newUrl);
    }

};
