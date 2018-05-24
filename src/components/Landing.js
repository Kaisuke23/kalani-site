import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Navs } from 'react-bootstrap';
import Kalani from '../images/Kalani.png'

class Landing extends Component {
  render() {
    return (
      <div className="Landing" >
      <div id = "LandingHeader">
        <h3>
        A recent <strong>graduate</strong> of University of Hawaii at Manoa with a BA in computer science.
        <strong>Passionate</strong> developer with a hunger for new and <strong>creative</strong> ideas.
        <br/>
        <br/>
        <a href="https://www.github.com/kaisuke23/"><i class="fab fa-github-square"></i></a>
        <a href="https://www.linkedin.com/in/kalani-sanidad/"><i class="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/kaisuke46/"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.twitch.tv/kaisuke/"><i class="fab fa-twitch"></i></a>
        <a href="mailto:ksanidad@hawaii.edu?Subject=Hello%20there!"><i class="far fa-envelope"></i></a>
        {/*


          */}
<br/>
<br/>
          <a href="https://www.github.com/kaisuke23/">
          <a class="btn btn-primary" href="#" role="button" id = "resumeButton">Resume <i class="far fa-file-pdf"></i></a>
          </a>
        </h3>

        </div>

        {/*
          This should not be moved. will move it later if need be
        */}
        <div id = "userIcon">
          <img src ={Kalani} className = "Thumb" />
        </div>

      </div>
    );
  }
}

export default Landing
