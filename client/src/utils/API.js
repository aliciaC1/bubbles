import axios from "axios";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

export default {
  register: function(userInfo) {
    return axios.post('/register', userInfo);
  },
  login: function(userInfo) {
    return axios.post('/login', userInfo);
  },

  dashboardInfo: function() {

  return axios.get('/api/dashboard');

  },

  logout: function(){

    return  axios.get('/logout')
  }


};