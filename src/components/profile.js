import React, { Component } from 'react';
import { Navs } from 'react-bootstrap';
import ProfileHeader from './headers/Profile';
import ProfileItemsOverlay from './ItemsOverlay';
import python from '../images/python.png';
import UHGroupings from '../images/UHGroupings.png';
import Warrior from '../images/WarriorGamers.png';
class Profile extends Component {
  render() {
    return (
      <div className="Profile section flex-container" id = "Profile">

      <div className = "projects">

        <div className = "item">
          <img src ={python} className = "Img"/>
          <div className = "overlay">
                <ProfileItemsOverlay className = "text" title ="Password Playaround" description = "Hashing passwords with python" used ="Python, Linux" link = "https://github.com/Kaisuke23/ics355-hw"/>
            </div>
        </div>


        <div className = "item">
          <img src ={UHGroupings} className = "Img"/>
          <div className = "overlay">
                <ProfileItemsOverlay className = "text" title ="UH Groupings" description = "Reboot of Grouper from internt2" used ="Spring boot, Bootstrap, Angualr, Java" link = "https://github.com/uhawaii-system-its-ti-iam/uhgroupings"/>
            </div>
        </div>

        <div className = "item">
          <img src = {Warrior} className = "Img"/>
          <div className = "overlay">
            <ProfileItemsOverlay className = "text" title = "Warrior Gamers" description = "Bringing UH gamers together" used = "Meteor, MongoDB, Javascript, CSS" link = "https://github.com/314gb/warrior-gamers"/>
          </div>
        </div>

      </div>
      </div>
    );
  }
}

export default Profile
