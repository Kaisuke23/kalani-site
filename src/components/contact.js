import React, { Component } from 'react';
import ContactHeader from './headers/contact';
import GreatChange from '../images/great_change.jpg';
class Contact extends Component {
  render() {
    return (
      <div className="Contact" id = "Contact">
        <ContactHeader/>
        <div id = "ifYouLike">
        If you like what you see...
        </div>
        <div id = "setTheory">
        <div id = "imageOfYeet">
          <img src = {GreatChange} className = "contactImg"></img>
        </div>
        <div id ="Messages">
        <p><h3><strong>Contact</strong></h3></p>
        <p><a href ="https://www.linkedin.com/in/kalani-sanidad/"><i class="fab fa-linkedin-square"></i> Linkedin </a></p>
        <p><a href ="https://github.com/Kaisuke23"><i class="fab fa-github"></i> Github </a></p>
        <p><a href ="https://twitter.com/kaisuke46/"><i class="fab fa-twitter-square"></i> Twitter</a></p>
        <p><a href ="https://www.twitch.tv/kaisuke/"><i class="fab fa-twitch"></i> Twitch</a></p>
        <p><a href ="mailto:ksanidad@hawaii.edu?Subject=Hello%20there!"> <i class="far fa-envelope"></i> ksanidad@hawaii.edu</a></p>
        <br/>


        </div>
        </div>
        This site was made by Kalani Sanidad using BootStrap UI, Reactjs <i class="fab fa-react"></i>, CSS, and Font-Awesome <i class="fab fa-font-awesome-flag"></i>
      </div>
    );
  }
}

export default Contact
