import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import '../styles/footer.css'
// import '../styles/privacy.css
// import '../styles/main.css'
// import '../styles/homes.css'


const Di = () => {

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
    <div className="disclaimer">
      <br /><br />
      <h2  style={{color:"red"}}>Disclaimer<br /><br /></h2>
      <p className="parazzz" style={{color:"indigo"}}>
        GRIET Clubee is the one stop desitination to stay updated on all the happening events of Gokaraju Rangaraju Institute of Engineering &amp; Technology. The Website is updated regularly with posts related to the various clubs of the college. The views/opinions/recommendations made in the posts do not necessarily represent that of the college or of people associated with it.<br />
        The content provided on the website is for information purposes only. Effort is made to keep the information accurate, however, the owners of this website make no claim of the accuracy and reliability of the information stated on this website. No person/organization should rely on the information stated on this website for making any decisions. Under no circumstances shall the owners be held responsible for any direct/indirect or whatsoever damages held from the use of information cited on this website.<br />
        Any advice/recommendation/opinion made on this website is not made by concerned professionals. It is advised to consult a professional before making any crucial decisions and not rely on any discretion stated on this website. The owners cannot be held liable for any decisions made on the basis of information stated on this website.
        This website may contain links to other websites operated by third parties. By clicking on those links, you acknowledge that the owners of this blog neither endorse nor are affiliated with the website linked. By clicking on those links, you also agree that the owners of this site are not responsible for any threatening, defamatory, obscene, offensive or illegal content or conduct of any other party.<br />
        Changes and improvements can be made to this website. The owners reserve the right to make changes in the blog anytime without the consent of its readers.
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
  export default Di