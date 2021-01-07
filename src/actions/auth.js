import axios from "axios";
import setAuthToken from "../utils/API/authToken";
import jwt_decode from "jwt-decode";

import {
    apiURL
} from "../utils/API/url";

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";

// Login - get user token, checks if user is manager and if they are logging
// in on the correct portal
export const loginUser = userData => dispatch => {
    axios
        .post(apiURL + "/api/auth/login", userData)
        .then(res => {
            // Set token to localStorage
            const {
                token
            } = res.data;

            if (res.data.property_managing && res.data.property_managing !== "Orchard Valley Townhomes") {
                console.log("WRONG PROPERTY")
                let err = {
                    unauthorized: "You are not the manager of this property"
                }
                dispatch({
                    type: GET_ERRORS,
                    payload: err
                })
            } else {
                localStorage.setItem("jwtToken", token);
                localStorage.setItem("_id", res.data._id);
                // Set token to Auth header
                setAuthToken(token, res.data._id);
                // Decode token to get user data
                const decoded = jwt_decode(token);
                // Set current user
                dispatch(setCurrentUser(decoded));
            }
        })
        .catch(err => {
            if (err && err.response) {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response ? err.response.data : err
                })
            } else {
                dispatch({
                    type: GET_ERRORS,
                    payload: {
                        unauthorized: "Server currently offline, please try again later"
                    }
                })
            }
        });
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("_id");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};