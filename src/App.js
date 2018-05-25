import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Profile from './components/profile';
import About from './components/about';
import Contact from './components/contact';
import ScrollToTop from 'react-scroll-up';
import ProfileHeader from './components/headers/Profile'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />
        <ProfileHeader/>
        <Profile />
        <About/>
        <Contact/>
        <ScrollToTop showUnder={160}>
          <span><i class="fas fa-arrow-circle-up" id = "upButton"></i></span>
        </ScrollToTop>

{/*
          */}
      </div>
    );
  }
}

export default App;
