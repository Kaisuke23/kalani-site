import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Navs } from 'react-bootstrap';
import Kaisuke from '../images/Kaisuke.jpg'

class Landing extends Component {
  render() {
    return (
      <div className="Landing" >
        <div className = "wholeLanding">
      <div className = "LandingHeader">
        <h3>
        A recent <strong>graduate</strong> of University of Hawaii at Manoa with a Bachelors in computer science.
        <strong> Passionate</strong> developer with a hunger for new and <strong>creative</strong> ideas.
        <br/>
        <br/>
        <a href="https://www.github.com/kaisuke23/"><i class="fab fa-github-square i-hov"></i></a>
        <a href="https://www.linkedin.com/in/kalani-sanidad/"><i class="fab fa-linkedin i-hov"></i></a>
        <a href="https://twitter.com/kaisuke46/"><i class="fab fa-twitter-square i-hov"></i></a>
        <a href="https://www.twitch.tv/kaisuke/"><i class="fab fa-twitch i-hov"></i></a>
        <a href="mailto:ksanidad@hawaii.edu?Subject=Hello%20there!"><i class="far fa-envelope i-hov"></i></a>
        {/*


          */}
<br/>
<br/>
          <a href="https://www.github.com/kaisuke23/">
          <a class="btn btn-primary" href="https://goo.gl/WsrZhb" role="button" id = "resumeButton">Resume <i class="far fa-file-pdf"></i></a>
          </a>
        </h3>
      </div>
      <img src ={Kaisuke} className = "landingPicture" />
        </div>

      </div>
    );
  }
}

export default Landing
