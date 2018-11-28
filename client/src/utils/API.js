import axios from "axios";


export default {
  register: function (userInfo) {
    return axios.post('/register', userInfo);
  },
  login: function (userInfo) {
    return axios.post('/login', userInfo);
  },

  dashboardInfo: function () {

    return axios.get('/api/dashboard');

  },

  logout: function () {

    return axios.get('/logout')
  },

  createBubble: function (bubbleName) {

    return axios.post('/api/bubble', bubbleName)
  }

};