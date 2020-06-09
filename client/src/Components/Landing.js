import React, {useState, useEffect} from 'react';
import Typical from 'react-typical'
import Background from '../Components/img/chicago.jpg';



const LandingPage=(props)=>{
    return(
    <>
    <div className='cityphoto'>
        <img className='city' src={Background} alt="Credits: Gautum Krishnan " />
    </div>

    <div className='header'>
        <h2 className="greeting">Hi, I'm Summer Bakr.</h2>
        <h3 className="subgreeting">I'm a </h3>
        <div className="typing">
        <Typical
            steps={['budding software engineer', 2000, 'fervent learner', 2000, "dedicated and passionate individual", 1000]}
            loop={Infinity}
            wrapper="p"
        /></div>
    </div>
        <div><p className='about'>Chicago-based software engineer with a background in both front-end and back-end programming languages. I have an affinity for learning new technologies, and particulary enjoy working with server-side technologies. My experiences allow me to bring a unique and fresh perspective to any team. </p></div>
    

    </>
    );
}
export default LandingPage;