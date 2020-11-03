import {
    apiURL
} from "./url"
import axios from "axios";

const URL = apiURL;

export default {

    GET_ALL_APARTMENTS: function (property) {
        return axios.get(URL + "/apartment/all/" + property);
    },

    GET_ONE_APARTMENT: function (unit) {
        return axios.get(URL + "/apartment/" + unit);
    },

    EDIT_APARTMENT: function (unit, body) {
        return axios({
            method: 'put',
            url: URL + "/apartment/" + unit,
            data: body,
            headers: {
                property: "Oak Avenue"
            }
        });
    },
    GET_ALL_RESIDENTS: function (property) {
        return axios.get(URL + "/users/residents/" + property);
    },
    GET_RESIDENT: function () {
        return axios.get(URL + "/users/resident")
    },
    EDIT_RESIDENT: function (body) {
        return axios.put(URL + "/users/resident", body)
    },
    CREATE_RESIDENT: function (body) {
        return axios.post(URL + "/api/auth/create", body);
    },
    DELETE_RESIDENT: function (body) {
        return axios({
            method: 'delete',
            url: URL + "/users/resident",
            data: body
        });
    },
    SEND_MAINTENANCE_REQUEST: function (body) {
        return axios.post(URL + "/request/maintenance", body);
    }

};