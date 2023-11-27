// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



const Ab = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/spices')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }
    return(

<div>
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" type="text/css" href="events.css" />
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
    <div className="about">
      <br /><br />
      <h2>About Clubee</h2>
      <p className="parazz">
        Many clubs in GRIET don’t have their own websits. So, to make it easier for our fellow collegemates, we came up with our idea “clubee”, where we bring together all the clubs. It’s a one-stop destination for every student and Student body. 
        <br /><br />
        Clubee has all of the clubs from Technical to Non-Technical. Our website has all of the latest updates regarding upcoming events and crucial club information. This website is absolutely secure, because only persons with legitimate credentials may login.
        <br /><br />
        <br /><br />
        <br /><br />
      </p>
    </div>
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
          <a className="link-1" href="ab.jsx">  Home </a>
          <a href="privacy.html">  Privacy Policy</a>
          <a href="disclaimer.html">  Disclaimer </a>
          <a href="about.html">  About </a>
          <a href="contactus.html">  Contact Us </a>
        </p>
        <p>©2023 Clubee Website. All rights reserved.</p>
      </div>
    </footer>
  </div></div>



    )
}


export default Ab