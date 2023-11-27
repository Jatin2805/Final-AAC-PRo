import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ct = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/aacevents')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }

  return (
    <div>
  <link rel="stylesheet" type="text/css" href="contact.css" />
  {/* <link rel="stylesheet" type="text/css" href="footer.css" /> */}
  <link rel="stylesheet" href="contact.css" />

  {/* <link rel="stylesheet" type="text/css" href="latest.css" /> */}
  <div className="pooji">
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="spirals.html">Spirals</a></li>
        <li><a href="rhythms.html">Rhythms</a></li>
        <li><a href="aac.html">AAC</a></li>
        <li><a href="ecell.html">ECELL</a></li>
        <li><a href="spices.html">Spices</a></li>
      </ul>
    </nav>
    <h1>MEET THE TEAM</h1>
    <br /><br />
    <div className="row">
      <div className="column">
        <div className="card">
          <img src="https://www.retropoplifestyle.com/wp-content/uploads/2019/11/DJ-Perch-at-HIGH-Ultra-Lounge.jpg" alt="Jane" style={{width: '100%'}} />
          <div className="container">
            <h2>Bheemreddy Poojitha</h2>
            <p className="title">Frontend</p>
            <p>abc</p>
            <p>bheemreddypoojitha20@gmail.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="https://www.retropoplifestyle.com/wp-content/uploads/2019/11/DJ-Perch-at-HIGH-Ultra-Lounge.jpg" alt="Mike" style={{width: '100%'}} />
          <div className="container">
            <h2>Saketh Reddy</h2>
            <p className="title">Design</p>
            <p>pqr</p>
            <p>bheemreddypoojitha20@gmail.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="https://www.retropoplifestyle.com/wp-content/uploads/2019/11/DJ-Perch-at-HIGH-Ultra-Lounge.jpg" alt="John" style={{width: '100%'}} />
          <div className="container">
            <h2>A.Vaishnavi</h2>
            <p className="title">Frontend</p>
            <p>xyz</p>
            <p>bheemreddypoojitha20@gmail.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
  <br /><br />
  <br /><br />
  <br /><br />
  <br /><br />
  <h1>CONTACT US</h1>
  <br /><br />
  {/* <div className="containerzz">
    <form >
      <label >First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label htmlFor="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      <label htmlFor="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
      <label htmlFor="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." style={{height: 200}} defaultValue={""} />
      <input type="submit" defaultValue="Submit" />
    </form>
  </div> */}
  <footer className="footer-distributed">
      <div className="footer-right">
        <a href="#"><i className="fa fa-facebook" /></a>
        <a href="#"><i className="fa fa-twitter" /></a>
        <a href="#"><i className="fa fa-linkedin" /></a>
        <a href="#"><i className="fa fa-github" /></a>
      </div>
      <div className="footer-left">
        <p className="footer-links">
          <link rel="stylesheet" href="footer.css" />
          <a className="link-1" href="mainevents" style={{padding:20,marginLeft:840,color:"black",textDecoration:"none"}}>  Home </a>
          <a href="Pr" style={{padding:20,color:"black",textDecoration:"none"}}>  Privacy Policy</a>
          <a href="Di" style={{padding:20,color:"black",textDecoration:"none"}}>  Disclaimer </a>
          <a href="Abu" style={{padding:20,color:"black",textDecoration:"none"}}>  About </a>
          <a href="contactus.html" style={{padding:20,color:"black",textDecoration:"none"}}>  Contact Us </a>
        </p>
        <p style={{padding:20,marginLeft:499}}>©2023 Clubee Website. All rights reserved.</p>
      </div>
    </footer>
</div>

  )
  }
export default ct
