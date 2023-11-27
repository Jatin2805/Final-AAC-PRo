import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import '../styles/footer.css'
import img from '../images/img.jpg'
import griet from '../components/GRIET_Logo.png'
import { DiAndroid } from "react-icons/di";
import Displayicons from './displayicons';
// import FaYoutube from './displayicons'

const MainEvents = () => {

    

  return (
<>
   <div>
   <link rel="stylesheet" href="events.css"/>
    {/* <link rel="stylesheet" href="style.css"/> */}
    {/* <link rel="stylesheet" type="text/css" href="main.css" /> */}
    <link rel="stylesheet" href="style.css " />
    <link rel="stylesheet" href="GRIET_Logo.png" />

    
    <div class="pooji">
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
        </div>
      </div>
        

        
        <div>
        <link rel="stylesheet" href="style.css"/>
        {/* <link rel="stylesheet" href="privacy.css" /> */}
        <link rel="stylesheet" href="latest.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <div className="slideshow-container">
      <div className="mySlides fade">
        <img src="https://cdn.sanity.io/images/dqyhuxze/production/ae77420c9c4441df27104fa2570ab1528eef0af9-1079x573.jpg?w=1079&h=573&auto=format" style={{width: '100%', height: 600}} />
      </div>
      <div className="mySlides fade">
        <img src="https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1682599705.png" style={{width: '100%', height: 600}} />
      </div>
      <div className="mySlides fade">
        <img src="https://i.ytimg.com/vi/lFRShqvehuM/maxresdefault.jpg" style={{width: '100%', height: 600}} />
      </div>
    </div> */}
    {/* <br />
    <br /><br />
    <div style={{textAlign: 'center'}}>
      <span className="dot" /> 
      <span className="dot" /> 
      <span className="dot" /> 
    </div>
  </div>
  <h2 className="heading">Latest Posts</h2> */}
  <link rel="stylesheet" href="latest.css" />
  <div className="container">
    <div className="post">
      <div className="post_img">
        <img src="https://i.pinimg.com/originals/d8/fd/96/d8fd96796da5cdb79902403d6d863a1e.jpg" alt />
      </div>
      <div className="post_info">
        <div className="post_date">
          <span>02 Jul 23</span>
          <span>Spirals GRIET</span>
        </div>
        <h1 className="post_title">M Akshaya Reddy</h1>
        <p className="post_text">
          Come! Fall in love with the Spirals Carnival
          The Spirals Carnival is on 8th of July 2023. 
        </p>
        <a href="Spi" className="post_cta">Read More</a>
      </div>
    </div>
    <div className="post">
      <div className="post_img">
        <img src="https://i.pinimg.com/564x/a8/1b/5d/a81b5d45b7e082ae0569aac333fa402c.jpg" alt />
      </div>
      <div className="post_info">
        <div className="post_date">
          <span>02 Jul 23</span>
          <span>Team Spirals</span>
        </div>
        <h1 className="post_title">B Saketh Reddy</h1>
        <p className="post_text">
          Alvida to our General Secretary-Bharadwaj Cheruvu
          A vote of thanks to out General Secretary, Bharadwaj Cheruvu.
        </p>
        <a href="Spi" className="post_cta">Read More</a>
      </div>
    </div>
  </div>
  <section className="web container" id="about">
    <h2 className="heading" />
    <p className="para"> 
    </p>
    <section className="web container" id="education">
      <h2 className="heading" />
      <p className="para">
      </p>
      <section className="web container" id="accomplishments">
        <h2 className="heading" />
        <p className="para">
        </p>
        <footer className="footer-distributed">
        {/* <div className="footer-right" style={{float: "right",  marginTop:6,maxWidth:180,}}>
                     <Displayicons style={{display: "inline-block",  width: 35, height: 35,backgroundColor:"white",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,transition:"all .25s"}}><a href='https://www.instagram.com/aac_grietofficial'></a></Displayicons>
                    <Displayicons  size="2x"/>
                    <Displayicons  size="2x"/>
                    {/* <DiAndroid  size="2x"/> */}
                {/* </div> */}
           <div className="footer-right" style={{float: "right",  marginTop:6,maxWidth:180,}}>
            <p>
         {/* <a href="https://www.instagram.com/aac_grietofficial"  >   <Displayicons style={{display: "inline-block",  width: 35, height: 35,backgroundColor:"white",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,transition:"all .25s"}}><a href='https://www.instagram.com/aac_grietofficial'></a></Displayicons></a>
         <a href="https://www.youtube.com/channel/UCqpWtDtDLxBLy8yJZO_-eBw"  >   <Displayicons style={{display: "inline-block",  width: 35, height: 35,backgroundColor:"#33383b",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,marginLeft:35,transition:"all .25s"}}><a href='https://www.instagram.com/aac_grietofficial'></a></Displayicons></a>
         <a href="https://github.com/aacgriet" >   <Displayicons style={{display: "inline-block",  width: 35, height: 35,backgroundColor:"#33383b",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,marginLeft:35,transition:"all .25s"}}><a href='https://www.instagram.com/aac_grietofficial'></a></Displayicons></a> */}
             {/* <img src={{img}}/> */}
            <a img='griet' href="https://www.instagram.com/aac_grietofficial"   style={{  display: "inline-block",  width: 35, height: 35,backgroundColor:"#33383b",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,transition:"all .25s"}}></a>
            <a href="https://www.youtube.com/channel/UCqpWtDtDLxBLy8yJZO_-eBw" style={{  display: "inline-block",  width: 35, height: 35,backgroundColor:"#33383b",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,marginLeft:35,transition:"all .25s"}}><i className="fa fa-twitter" /></a>
            <a href="https://github.com/aacgriet" style={{  display: "inline-block",  width: 35, height: 35,backgroundColor:"#33383b",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,marginLeft:35,transition:"all .25s"}}><i className="fa fa-linkedin" /></a>
            <a href="#" />
            </p>
          </div> 

          <div className="footer-left">
            <p className="footer-links">
              {/* <link rel="stylesheet" href="footer.css" /> */}
              <a className="link-1" href="mainevents" style={{padding:25,color:"black"}} >  Home </a>
              <a href="Pr" style={{padding:25,color:"black"}} >  Privacy Policy</a>
              <a href="Di" style={{padding:25,color:"black"}} >  Disclaimer </a>
              <a href="Abu" style={{padding:25,color:"black"}}>  About </a>
              <a href="https://www.instagram.com/aac_grietofficial" style={{padding:25,color:"black"}}>  Contact </a>
            </p>
            <p style={{padding:20,marginLeft:499}}>©2023 Clubee Website. All rights reserved.</p>
          </div>
        </footer>
      </section></section></section></div>  
        </>
            
    
  )
}



export default MainEvents