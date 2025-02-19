import React from 'react';
import NavBar from './NavBar';
import './Home.css';

const Home = () => {
  return ( 
    
    <div className="background-container">  
      <div className="navbar">  
        <NavBar />
      </div>
      <div className="stars"></div> 
      
      <div className="twinkling"></div>

   

      <div className="content">  
        <p className = "logotitle">Cosmico AI</p>  
        <p className = "subtitle">A Hub for Researchers,<br /> Powered by AI</p> 
        


      </div>
    </div>
  );
};

export default Home;
