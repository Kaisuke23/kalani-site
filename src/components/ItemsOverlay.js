import React, { Component } from 'react';

class ProfileItemsOverlay extends Component {
  render(props) {
    return (
      <div className="ProfileItemsOverlay">
        <br/>
        <h4> {this.props.title}</h4>
        <br/>
        <h5> {this.props.description}</h5>
        <br/>
        <p> {this.props.used}</p>
        <br/>
        <a href = {this.props.link} id = "overlayLink">repo <i class="fab fa-github"></i></a>
      </div>
    );
  }
}

export default ProfileItemsOverlay;
