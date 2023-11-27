import Home from './Home';
import Login from './Login';
import Register from './Register';
import Event from './Event'
import EventSummary from './EventSummary';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Spirals from './Spirals';
import AAC from './AAC'
import Spices from './Spices'
import Rythms from './Rythms'
import ECell from  './ECell'
import MainEvents from './MainEvents';
import Spi from './spi';
import Ry from './ry';
import Ac from './ac';
import Ec from './ec';
import Sp from './sp';
import Ab from './ab';
import Pr from './pr'
import Di from './di'
import Abu from './abu'
import Ct from './ct'





function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Login/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/mainevents" element ={<MainEvents/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/event" element ={<Event/>} />
          <Route path="/eventsummary" element ={<EventSummary/>} />
          <Route path="/spirals" element ={<Spirals/>} />
          <Route path="/aac" element ={<AAC/>} />
          <Route path="/spices" element ={<Spices/>} />
          <Route path='/rythms' element ={<Rythms/>} />
          <Route path='/ecell' element ={<ECell/>} />
          <Route path='/spi' element ={<Spi/>} />
          <Route path='/ry' element ={<Ry/>} />
          <Route path='/ac' element ={<Ac/>} />
          <Route path='/ec' element ={<Ec/>} />
          <Route path='/sp' element ={<Sp/>} />
          <Route path='/abt' element ={<Ab/>} />
          <Route path='/pr' element ={<Pr/>} />
          <Route path='/di' element ={<Di/>} />
          <Route path='/abu' element ={<Abu/>} />
          <Route path='/ct' element ={<Ct/>} />
        </Routes>
      </BrowserRouter>
    </div>
     
    
  )
  
}

export default App
