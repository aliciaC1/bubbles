// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import API from "../../utils/API";

import React from 'react'
import SideNav from '../../components/SideNav';
import BubbleWindow from '../../components/BubbleWindow'
import Bubble from '../../components/Bubble'


const UserDashboard = () => {
  return (
    <div className = "container">
      <SideNav/>
      <Bubble></Bubble>

    </div>
  );
};


export default UserDashboard