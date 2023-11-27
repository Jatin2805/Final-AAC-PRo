import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import '../styles/footer.css'
// import '../styles/privacy.css
// import '../styles/main.css'
// import '../styles/homes.css'


const Abu = () => {

    // const [events, setEvents] = useState([]);    

    // useEffect(() => {
    //     fetchEvents();
    //   }, []);
    
          
    // const fetchEvents = () => {

    //     axios.get( 'http://localhost:3001/ecell')
    //     .then((res) => {
    //         console.log(res.data.data)
    //         setEvents(res.data.data)                  
            
    //     })
    //     .catch(err => console.log(err));

    // }

  return (
    <div>
  <link rel="stylesheet" href="events.css" />
  <link rel="stylesheet" type="text/css" href="main.css" />
  <div className="pooji">
    <nav>
      <ul>
      <li><a href="/mainevents" style={{padding:30}}>Home</a></li>
                          {/* <li><a href="/home">Home</a></li> */}
                          <li><a href="/spi" style={{padding:30,marginTop:80
                          }}>Spirals</a></li>
                          <li><a href="/ry" style={{padding:30}}>Rythms</a></li>
                          <li><a href="/ac" style={{padding:30}}>AAC</a></li>
                          <li><a href="/ec" style={{padding:30}}>ECell</a></li>
                          <li><a href="/sp" style={{padding:30}}>Spices</a></li>
                          <li><a href="/login" style={{padding:30}}>Login</a></li>
      </ul>
    </nav>
    <div className="about">
      <br /><br />
      <h2 style={{color:"red"}}>About Clubee</h2>
      <p className="parazz" style={{color:"indigo"}}>
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
          <a className="link-1" href="mainevents" style={{padding:20,marginLeft:840,color:"black",textDecoration:"none"}}>  Home </a>
          <a href="Pr" style={{padding:20,color:"black",textDecoration:"none"}}>  Privacy Policy</a>
          <a href="Di" style={{padding:20,color:"black",textDecoration:"none"}}>  Disclaimer </a>
          <a href="Abu" style={{padding:20,color:"black",textDecoration:"none"}}>  About </a>
          <a href="contactus.html" style={{padding:20,color:"black",textDecoration:"none"}}>  Contact Us </a>
        </p>
        <p style={{padding:20,marginLeft:499}}>©2023 Clubee Website. All rights reserved.</p>
      </div>
    </footer>
  </div></div>

  )}
  export default Abu