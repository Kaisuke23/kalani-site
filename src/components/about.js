import React, { Component } from 'react';
import AboutHeader from './headers/aboutHeader'
class About extends Component {
  render() {
    return (
      <div className="About" id = "About">
        <AboutHeader/>
        <div id ="AboutMe">
        <p><strong>Kalani Sanidad</strong> likes and tries to be a jack of trades. </p>

        <p>From the melting pot and paradise of <a href = "https://en.wikipedia.org/wiki/Maui" className = "Maui">Maui, Hawaii <i class="fas fa-external-link-alt"></i></a>, he started coding while in high school for the Maui High Robtoics team.
        <strong> Loyal</strong> to the FRC Team 2443, he learned the basics for computer programming and the start of software development with his teammates. After graduating high school, he moved on to study at
         <strong> The University of Hawaii at Manoa</strong>.</p>

        <p>During his studies there, he developed his skills in <strong>Information and Computer Science</strong>, with a focus on security science. Joining the GreyHats at UHM, the cyber security club on campus, he widened his horizons and practiced with the best in the buisness.
        With them, he learned the <strong>standardized practices</strong> for reliable cyber security. During his time in college he studied to be fluent in<strong> Java, Python, and Javascript</strong>. He has also learned the <strong>modern frameworks</strong> such as React and Angular. He has demonstrated his skills to his professors, and graduated with a <strong>Bachelors degree</strong>.</p>

        <p>From nothing comes a something great. From his <strong>humble</strong> beginnings, he learned how to create <strong>robust yet elegant</strong> projects. Out in the world finding a purpose to put his skills into,
        he <strong>strives to learn more</strong>.</p>
        </div>
      </div>
    );
  }
}

export default About
