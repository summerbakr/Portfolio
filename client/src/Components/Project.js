import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import AddPlaylist from './img/addplaylist.png';
import AddSong from './img/addsong.png';
import ViewAll from './img/viewall.png';
import Welcome from './img/welcome.png';
import ViewPlaylist from './img/viewplaylist.png';
import Index from './img/index.png';

const Project=(props)=>{
        return (
    <div>
    <h1 className='title'>Projects</h1>
    
        
        <div className='description'>
        <h2><a href="http://13.58.112.48">Collaborative Playlist App</a></h2>
        <p className='appcontent'>This app was created with Python and the Django framework, and deployed to the web by way of Amazon Web Services. It is a user-friendly app that explores many different CRUD functionality, and also has a log-in and registration component that allows users to interact with the app by creating a profile and thus saving their data. The authentication feature was achieved with bcrypt. This app allows users to add songs to the database and create playlists both individually and collaboratively. </p>
    </div> 
    
        <div className='carousel'>
        
        <Carousel>
            <Carousel.Item>
                <img
                className='img'
                className="d-block w-100"
                src={Index}
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                id="image2"
                className="d-block w-100"
                src={Welcome}
                alt="Second slide"
                />

            
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='img'
                className="d-block w-100"
                src={AddSong}
                alt="Third slide"
                />

        
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='img'
                className="d-block w-100"
                src={AddPlaylist}
                alt="Fourth slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='img'
                className="d-block w-100"
                src={ViewAll}
                alt="Fifth slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                id='image6'
                className="d-block w-100"
                src={ViewPlaylist}
                alt="Third slide"
                />

                
            </Carousel.Item>
            </Carousel>
        </div>
    </div>
    
    
        );
    }
export default Project;