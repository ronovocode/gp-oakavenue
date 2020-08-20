import { apiURL } from "./url"
import axios from "axios";

import { apartments } from '../../static/data';

const URL = apiURL;

export default {

  GET_ALL_APARTMENTS: function(property) {
    return axios.get(URL + "/apartment/all/" + property);
  },

  GET_ONE_APARTMENT: function(unit) {
      return axios.get(URL + "/apartment/" + unit);
  }, 

  EDIT_APARTMENT_AVAILABILITY: function(unit, body) {
      return axios.put(URL + "/apartment/unit/", body);
  },
  GET_ALL_RESIDENTS: function(property) {
    return axios.get(URL + "/users/residents/" + property);
  }

};
