import React, { Component } from 'react';
import { Navs } from 'react-bootstrap';
class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class ="navbar-brand" id = "whoAmI">
        Kalani Sanidad
        </div>
        <div class="collapse navbar-collapse justify-content-end" >
        <div class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link" href="#Profile">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#About">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#Contact">Contact me</a>
          </li>
        </div>
      </div>
        </nav>
      </div>
    );
  }
}

export default NavBar
