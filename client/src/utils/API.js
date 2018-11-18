import axios from "axios";

export default {
  register: function(userInfo) {
    return axios.post('/register', userInfo);
  },
  login: function(userInfo) {
    return axios.post('/login', userInfo);
  }
};
