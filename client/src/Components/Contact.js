import React, {useState} from 'react';
import emailjs from 'emailjs-com'
import {navigate} from '@reach/router';



const Contact=(props)=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [msg, setMsg]=useState('');
    const [thanks, setThanks]=useState('')
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const template='template_GW1QnjxZ';
        const userId='user_PyQ8Ekwhfkjs29drnXOsz';
        const service='default_service'
        const params={name:name, email:email,message:msg};
        console.log(params)
        console.log(template)
        console.log(userId)

        emailjs.send(service, template, params, userId)
            .then((response) =>{
                setName('');
                setEmail('');
                setMsg('');
                setThanks("Thanks for your submission. I will be in touch shortly!")
                console.log(`success! here is your ${response}`);
            }, (error)=>{console.log(error)});
            
    }
    return(
        <>
        <div className='contact'>
            <h2 style={{color:'green'}}>{thanks}</h2>
            <h2>Want to get in touch?</h2>
            <p className='looking'>I am currently looking for opportunities in software development.</p>
            <form id="contact-form"  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    value={name}
                    placeholder="Name"
                    onChange={(e)=>setName(e.target.value)}
                    className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea value={msg} placeholder='Leave me a message!' onChange={(e)=>setMsg(e.target.value)}  className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
        </>
    );
}

export default Contact;
