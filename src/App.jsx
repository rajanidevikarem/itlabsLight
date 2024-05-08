import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Services from './Views/Services';
import Solutions from './Views/Solutions';
import Career from './Views/Career';
import Contact from './Views/Contact'
import Jobs from './Views/Jobs';
import Terms from './Views/Terms';
import Privacy from './Views/Privacy';
import Currentopening from './Views/Currentopening';
import Login from './Views/Login';
import Jobboard from './Views/Jobboard';
import Jobslist from './components/jobslist1';
import './App.css';

function App() {
  return (
    <div className="itlabs bg-midnight">
       <Router>
<Navbar/> 
       <Routes>
       <Route path="/" exact element={<Home/>}/> 
       <Route path="/home" exact element={<Home/>}/> 
        <Route path="/About" element={<About/>} /> 
        <Route path="/Services" element={<Services/>} /> 
        <Route path="/Solutions" element={<Solutions/>} /> 
        <Route path="/Career" element={<Career/>} /> 
        <Route path="/Contact" element={<Contact/>} /> 
        <Route path="/Jobs" element={<Jobs/>} /> 
        <Route path="/Terms" element={<Terms/>} /> 
        <Route path="/Privacy" element={<Privacy/>} /> 
        <Route path="/Currentopening" element={<Currentopening/>} /> 
           <Route path="/Login" element={<Login/>} /> 
        <Route path="/Jobboard" element={<Jobboard/>} /> 
        <Route path="/Jobslist" element={<Jobslist />} /> 
       </Routes>
  <Footer/>
      </Router>
   
    </div>
  );
}

export default App;
