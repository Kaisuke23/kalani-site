import React, { Component } from 'react';
import { Navs } from 'react-bootstrap';
import ProfileHeader from './headers/Profile';
import ProfileItemsOverlay from './ItemsOverlay';
import python from '../images/python.png';
class Profile extends Component {
  render() {
    return (
      <div className="Profile" id = "Profile">
      <ProfileHeader/>
      These are some of the projects i worked on.

      <div id = "projects">

        <div id = "python">
          <div id = "overlay1">
              <span id = "pythonDescription">
                <ProfileItemsOverlay title ="Password Playaround" description = "Hashing passwords with python" used ="Python, Linux" link = "https://www.google.com"/>
              </span>
            </div>
        </div>


        <div id = "UHGroupings">
          <div id = "overlay2">
              <span id = "UHGroupingsDescription">
                <ProfileItemsOverlay title ="UH Groupings" description = "Reboot of Grouper from internt2" used ="Spring boot, Bootstrap, Angualr, Java" link = "https://www.test.hawaii.edu/uhgroupings"/>
              </span>
            </div>
        </div>

      </div>
      </div>
    );
  }
}

export default Profile
