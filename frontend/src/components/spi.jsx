// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Spi = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/spiralsevents')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }

  return (
<>
    <div>
    <link rel="stylesheet" href="main.css"/>
    <link rel="stylesheet" href="events.css"/>
    {/* <link rel="stylesheet" href="style.css"/> */}
    
    <div class="pooji">
            <nav>
            <ul>
            <li><a href="/mainevents" style={{padding:25,}}>Home</a></li>
                          {/* <li><a href="/home">Home</a></li> */}
                          <li><a href="/spi" style={{padding:25,}}>Spirals</a></li>
                          <li><a href="/ry"style={{padding:25,}}>Rythms</a></li>
                          <li><a href="/ac"style={{padding:25,}}>AAC</a></li>
                          <li><a href="/ec"style={{padding:25,}}>ECell</a></li>
                          <li><a href="/sp"style={{padding:25,}}>Spices</a></li>
                          <li><a href="/login"style={{padding:25,}}>Login</a></li>
            </ul>

            </nav>
        </div>
        
            <div >
                {/* <div >
                    <h2 style={{color:'white'}}>Spirals Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile"> 
                                <div class="text">
                                    <p class="animate-text">{event.eventname}</p>
                                    <p class="animate-text"> {event.eventdesc}</p>
                                    <p class="animate-text">{event.eventdate}</p>
                                    <p class="animate-text">{event.eventtype}</p>
                                </div>
                        </div>        
                            ))} 
                </div> */}
            </div>
    </div>   
   <div>
  <meta charSet="UTF-8" />
  <title>Team Spirals</title>
  {/* <link rel="stylesheet" href="spiral.css" /> */}
  {/* <link rel="stylesheet" type="text/css" href="homes.css" /> */}
  <div className="pooji">
    <nav>
      <ul>
        
      </ul>
    </nav>
    <div style={{float: 'right'}}>
      <img src="https://th.bing.com/th/id/R.71c5fb80df9c079ea12e1f16518b77bc?rik=hmbhTKqC4mJijA&riu=http%3a%2f%2fwww.mun.griet.ac.in%2flogo%2fspiarls.png&ehk=M3qGB3nKOyOMPb7o9cpMXFSj6TK9AaD1rdwYTmI1a9s%3d&risl=&pid=ImgRaw&r=0" width={600} height={600} />
    </div><br />
    <div className="content">
      <span className="title">Literary Club</span>
      <h1>TEAM <span>SPIRALS</span></h1>
      <p>
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
      </p>
      {/* <section className="web container" id="about"> */}
        <h2 className="heading" style={{color:'red'}}>About the Club</h2>
        <br /><br />
        <p style={{color: 'black'}}>The society aims at enhancing the much-required leadership qualities as well as interpersonal communication skills by encouraging students to participate in and organize various inter and intra college literary events.
          <br /><br />
          <br /><br />
        </p>
        <section className="web container" id="education">
          <div>
            <div style={{float: 'right'}}>
              <img src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rvcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80" width={500} height={400} />
            </div>
            <div>
              <h2 className="heading" style={{color:"red"}}>Our Story</h2>
              <p style={{color: 'indigo'}}>Team SPIRALS has been successfully conducting  many such events since it's inception in the year 2014 and has received immense response and love. The club was named and initiated by Dr. J N Murthy.
                <br /><br />
                The club provides an ideal platform for all the book-lovers, story-tellers, poets, writers and bloggers to interact and share their views. The logo of team SPIRALS shines in the glitter of 4 different color, each with a significant value. The glorious green color symbolizes united strength of the team The radiant red represents endeavor to seek and spread knowledge. The blissfull blue indicates stability of the team The vivacious voilet depicts uniqueness of the work. These colors inherently manifest the skills of listening, speaking, reading and writing.<br />
                <br /><br />
                <br /><br />
              </p>
            </div>
          </div>
          <section className="web container" id="accomplishments">
            <h2 className="heading">The Team</h2>
            <br /><br />
            <p>“Leadership is not about titles, positions , or work hours. It’s about relationships.”</p> 
            <div style={{float: 'left'}}>
              <img src="https://www.griet.ac.in/images/gokaraju_rangaraju.jpg" width={400} height={300} />
            </div>
            <p style={{color: 'indigo'}}> Ms. Stgy Sandhya Ma’am
              <br />
              Professor and Spirals Coordinator
            </p>
            <p style={{color: 'indigo'}}>
              <br /><br />
              “As much as the society enjoys the limelight, it has also hosted multiple Intra college literary events to hunt for fresh talents and guided those with a passion. Those with a flair for literature have always found a family in the Society.”
              <br /><br />
              <br /><br /></p>
            <br /><br />
            <section className="web container" id="activities">
              <h2 className="heading"style={{color:"red"}}>Events</h2>
              <link href="events.css" rel="stylesheet" type="text/css" />
              <p style={{color: 'indigo'}}>Some of the best events to look forward to are</p>

 <div >
                    <h2 style={{color:'black'}}>Spirals Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile" style={{width:330}}> 
                                <div class="text">
                                    <p class="animate-text">{event.eventname}</p>
                                    <p class="animate-text"> {event.eventdesc}</p>
                                    <p class="animate-text">{event.eventdate}</p>
                                    <p class="animate-text">{event.eventtype}</p>
                                </div>
                        </div>        
                            ))} 
                </div>



              {/* <div className="wrap">
                <div className="tile">  */}
                  {/* <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png" /> */}
                  {/* <div className="text">
                    <h1>Spirals Carnival</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      An annual event that marks the beginning of the academic year. The day is packed with a hand-picked selection of literary events carefully curated by the seniors to open new avenues for the freshers
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://garden.spoonflower.com/c/12742058/p/f/l/2GhbfK8w0-DtVsY0WdJbd9XuNeWBYk5-ob62wGjvX95LVwsrWtoc7Tw/Solid%20pastel%20yellow.jpg" />
                  <div className="text">
                    <h1>MUN</h1>
                    <p className="animate-text">
                      Model United Nations, also known as model UN or MUN, is an educational simulation in which students learn about diplomacy, international relations, and the United Nations. 
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://plainbackground.com/plain1024/779ecb.png" />
                  <div className="text">
                    <h1>LitRapture</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      An annual inter collegiate literary extravaganza designed to bring together young talents from around the state. It encourages healthy competitions as a means to extend friendships and share the passion for literature
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap">
                <div className="tile"> 
                  <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-green-color-solid-background-1920x1080.png" />
                  <div className="text">
                    <h1>Minerva</h1>
                    <p className="animate-text">
                      Minerva is a virtual literary festival designed to kindle the spirits of literary from the comfort of one’s home.
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png" />
                  <div className="text">
                    <h1>Others</h1>
                    <p className="animate-text"> Apart from this, the Society organizes regular workshops for debating, creative writing, spoken word poetry, elocution and improve.</p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://cdn.crispedge.com/ff964f.png" />
                  <div className="text">
                    <h1>Others</h1>
                    <p className="animate-text"> Apart from this, the Society organizes regular workshops for debating, creative writing, spoken word poetry, elocution and improve.</p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            <link rel="stylesheet" href="footer.css" />
            <footer className="footer-distributed">
              <div className="footer-right" style={{float: "right",  marginTop:6,maxWidth:300,}}>
                
              <p>
             {/* <img src={{img}}/> */}
            <a  href="https://www.instagram.com/aac_grietofficial"  style={{  display: "inline-block",  width: 35, height: 35,backgroundColor:"#33383b",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,transition:"all .25s"}}><i className="fa fa-facebook" /></a>
            <a href="https://www.youtube.com/channel/UCqpWtDtDLxBLy8yJZO_-eBw" style={{  display: "inline-block",  width: 35, height: 35,backgroundColor:"#33383b",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,marginLeft:35,transition:"all .25s"}}><i className="fa fa-twitter" /></a>
            <a href="https://github.com/aacgriet" style={{  display: "inline-block",  width: 35, height: 35,backgroundColor:"#33383b",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,marginLeft:35,transition:"all .25s"}}><i className="fa fa-linkedin" /></a>
            <a href="#" />
            </p>
          </div>
          <div className="footer-left">
            <p className="footer-links">
              {/* <link rel="stylesheet" href="footer.css" /> */}
              <a className="link-1" href="mainevents" style={{padding:15,color:"black", textDecoration:"none"}} >  Home </a>
              <a href="Pr" style={{padding:15,color:"black", textDecoration:"none"}} >  Privacy Policy</a>
              <a href="Di" style={{padding:15,color:"black", textDecoration:"none"}} >  Disclaimer </a>
              <a href="Abu" style={{padding:15,color:"black", textDecoration:"none"}}>  About </a>
              <a href="https://www.instagram.com/aac_grietofficial"style={{padding:15,color:"black",textDecoration:"none"}} >  Contact Us </a>
            </p>
            <p style={{padding:20,marginLeft:400}}>©2023 Clubee Website. All rights reserved.</p>
              </div>
            </footer>
          </section></section></section></div></div></div>
</>
  )
}

export default Spi