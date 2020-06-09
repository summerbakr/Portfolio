import React,{ useState, Component } from 'react';
import './App.css';
import {Router, Link} from '@reach/router';
import About from './Components/About';
import LandingPage from './Components/Landing';
import Contact from './Components/Contact';
import Linkedin from './Components/img/linkedin.png';
import Github from './Components/img/github.png';
import Project from './Components/Project.js';





function App() {
  


  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Welcome</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/About">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
  
    <Router>
      <LandingPage path='/'/>
      <About path='/About'/>
      <Contact path='/Contact'/>
      <Project path='/Projects' />

      
    
    </Router> 
    <div className='social'>
        <a href='https://www.linkedin.com/in/summer-bakr-5b8379147/'><img className='linkedin' src={Linkedin} alt="Linkedin"/></a>
    </div>
    <div className='social'>
        <a href="https://github.com/summerbakr"><img className='github' src={Github} alt="Linkedin"/></a>
    </div>
  
    
    

    </div>
  );
}

export default App;
