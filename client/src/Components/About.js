import React, {useState} from 'react';
import Photo from './img/summer.jpg'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import 'react-vertical-timeline-component/style.min.css';


const About=(props)=>{
    const [content, setContent]=useState("")

    const viewMorePython=(e)=>{
            console.log('Python')
            setContent("Django, jQuery, Flask, SQLite")
            console.log(content)
        }
    const viewMoreMern=(e)=>{
            console.log('MERN')
            setContent("JavaScript, React, Express, MongooseDB, APIs")
            console.log(content)
        }
    const viewMoreHTML=(e)=>{
            console.log('HTML AND CSS')
            setContent("Proficient in CSS libraries such as Bootstrap")
            console.log(content)
    }

    return(
        <>
            <h1 className='abouttitle'style={{textDecoration:'underlined'}}>About Me</h1>
            <div className="photo">
            <img className="pic"
                src={Photo}
                alt="Profile picture of Summer Bakr"
            />
        </div>
        <div className='content'>
            <p id='bio'>I am a recent college graduate that became fascinated with software after working in a hospital and seeing firsthand the transformative power of technology. I wanted to become part of the movement of people pioneering change through technology, and set out on a mission to do just that by immersing myself fully in coding and technology. </p>
        </div>
        
            <h2 className="myskills"> My Skills</h2>
            <div className='skillbtns'>
                
                <button id="Python" className="skillbtn" onClick={(e)=>viewMorePython(e)}>Python</button>
                <button id="Mern" className="skillbtn" onClick={(e)=>viewMoreMern(e) }>MERN</button>
                <button id="HTML" className="skillbtn" onClick={(e)=>viewMoreHTML(e) }>HTML/CSS</button>
            </div>
                <div>
                { content ? <p style={{marginLeft: '540px', marginTop: '100px', backgroundColor:'plum', width: '400px', color:"black"}}>{content}</p> : ''}
                </div>
    <h2 className="education">Education and Professional Experience</h2>
    <Timeline lineColor={'#ddd'}>
    <TimelineItem
        key="001"
        dateText="03/2020 – Present"
        dateInnerStyle={{ background: '#9A2AD2', color: '#000' }}
        style={{ color: '#9A2AD2' }}
    >
        <h3 style={{color: '#9A2AD2'}}>Full Stack Software Development Student</h3>
        <h4 style={{color: "#9A2AD2"}}>Coding Dojo, Chicago, IL</h4>
        <p style={{marginTop: '10px', color: 'white'}}>Have spent the past few months immersing myself 60+ hours a week learning and solidying programming languages and concepts through the rigorous Coding Dojo curriculum. Have demonstrated proficiency in MERN and Python thus far, achieving the highest accolade in both languages. Have also gained in-depth understanding of constructing algorithms and different data structures. Proficient in both HTML and CSS as well!
        
        </p>
    </TimelineItem>
    <TimelineItem
        key="002"
        dateText="08/2019 – 03/2020"
        dateInnerStyle={{ background: '#A678D4', color: '#000' }}
        bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
    >
        <h3 style={{ color: '#A678D4' }}>Clinical Research Coordinator</h3>
        <h4 style={{ color: '#A678D4' }}>Lurie Children's Hospital, Chicago, IL</h4>
        <p style={{marginTop: '10px', color: "#A678D4"}}>
        Worked with principal investigators in gastroenterology to facilitate their clinical research in rare diseases. Helped with the maintenance and collection of data, and saw firsthand how heavily the medical industry and research relied on technology to push change. 
        </p>
    </TimelineItem>
    <TimelineItem
        key="003"
        
    
        dateText="09/2015-06/2019"
        dateInnerStyle={{ background: '#D4B5F2', color: '#000' }}
        style={{ color: '#D4B5F2' }}
        >
        <h3 style={{color: '#D4B5F2'}}>Achieved Bachelor's Degree</h3>
        <h4 style={{color: "#D4B5F2"}}>Northwestern University, Evanston, IL</h4>
        <p style={{marginTop: '10px', color: "white"}}>Graduated from Northwestern University with a Bachelor of Arts in Environmental Science on the pre-health track. Throughout my four years, I  cultivated powerful critical thinking skills which I attribute to a liberal arts degree, as well as strong basis in mathematics and science. Took relevant courses such as Calculus 3, Chemistry, Physics, and Statistics. More importantly, I gained soft skills such as effective communication, leadership, teamwork, accountability, and a love and desire for life-long learning. 
        </p>

    </TimelineItem>
    
    </Timeline>

    </>
    );
}

export default About;