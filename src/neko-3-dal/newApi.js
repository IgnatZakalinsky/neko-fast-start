import {TestAPI} from "./testApi";
import {METHOD_GET} from "../neko-2-bll/bll-1-base/initialState";

export const NewAPI = {
    getSome(data) {
        // some url
        let url = 'http://localhost:3005/' + data;

        return TestAPI.getTest(url, {}, METHOD_GET)
    }

};
