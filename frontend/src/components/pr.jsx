import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import '../styles/footer.css'
// import '../styles/privacy.css
// import '../styles/main.css'
// import '../styles/homes.css'


const Pr = () => {

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

<div style={{backgroundColor:""}}>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" type="text/css" href="events.css" />
  <div className="pooji" >
    <nav>
      <ul>
      <li><a href="/mainevents">Home</a></li>
                          {/* <li><a href="/home">Home</a></li> */}
                          <li><a href="/spi">Spirals</a></li>
                          <li><a href="/ry">Rythms</a></li>
                          <li><a href="/ac">AAC</a></li>
                          <li><a href="/ec">ECell</a></li>
                          <li><a href="/sp">Spices</a></li>
                          <li><a href="/login">Login</a></li>      </ul>
    </nav>
    <div className="privacy">
      <br /><br />
      <h2  style={{color:"red"}}>Privacy Policy</h2>
      <p className="textz"style={{color:"indigo"}}>
        We may record the Internet Protocol (IP) address of the computer you are using, information about your internet browser and operating system, date and time of access and the source page that directed you to our website. The use of this information is limited to analysis for improving our website and to generate aggregate statistical reports and such like purposes.
        The information collected by this website is not shared or disclosed to third parties but may be disclosed in limited circumstances as and if required by law, order, statutory bodies, court, rules &amp; regulations.<br /><br />
        Information collected through Login: <br /><br />
        ◉ We may ask you to fill out your name and email/Phone No if you register on our website or fill out a form on this site. The information you share might be used by us to send you emails, while we will not share your name, email or any other information you share with us through forms with any third parties. <br /><br />
        ◉ As a club, by choosing to post anything, you agree to disclose your name publicly. We cannot be held responsible if any third party uses the information you shared in your comment on any of our blog posts. <br /><br />
        This website may contain links to websites within our network and to other websites that are outside our domain which are not monitored by us and are not covered by this privacy policy. We are not responsible for the privacy practices or security of such websites.
        While we are committed to ensuring that the privacy of the users is protected, however, we do ensure or warrant the security of any information you transmit to us, and you do so at your own risk.
        This privacy policy can be revised/modified/amended at any point of time at the sole discretion of the owners of this website.
        <br /><br />
        <br /><br />
        <br /><br />
      </p>
    </div>
    <footer className="footer-distributed">
      {/* <div className="footer-right">
        <a href="#"><i className="fa fa-facebook" /></a>
        <a href="#"><i className="fa fa-twitter" /></a>
        <a href="#"><i className="fa fa-linkedin" /></a>
        <a href="#"><i className="fa fa-github" /></a>
      </div> */}
      <div className="footer-left" >
        <p className="footer-links" >
          <link rel="stylesheet" href="footer.css"  />
          <a className="link-1" href="mainevents" style={{padding:20,marginLeft:600,color:"black"}}>  Home </a>
          <a href="Pr" style={{padding:20,color:"black"}}>  Privacy Policy</a>
          <a href="Di" style={{padding:20,color:"black"}}>  Disclaimer </a>
          <a href="about.html" style={{padding:20,color:"black"}}>  About </a>
          <a href="contactus.html" style={{padding:15,color:"black"}}>  Contact Us </a>
        </p>
        <p style={{padding:20,marginLeft:499}}>©2023 Clubee Website. All rights reserved.</p>
      </div>
    </footer>
  </div></div>

     )
     }
     export default Pr