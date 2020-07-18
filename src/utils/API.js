const axios = require('axios');

const URL = "http://localhost:3001";

const API = {
    userLogin: (data) => {
        axios.post(URL + '/users/login', {
            email: data.email
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}

export default API;