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

const toggleClass=(e)=>{
  const toggleButton=document.getElementsByClassName('toggle-button')[0]  
  const navbarLinks=document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener("click", ()=>{
    navbarLinks.classList.toggle("active")
})
}


  return (
    <div className="App">
      <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="brand-title" href="/">Welcome</a>
            
            <div href="#" class="toggle-button" onClick={(e)=>toggleClass(e)}>
            
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            </div>

              <div class="navbar-links">
              <ul>
                <li>
                  <a href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li>
                  <a  href="/About">About</a>
                </li>
                <li>
                  <a href="/Projects">Projects</a>
                </li>
                <li>
                  <a id="outlier" href="/Contact">Contact</a>
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
