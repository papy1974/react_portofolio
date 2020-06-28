import React from "react";
// import Maura's picture
import photo from "./images/Papy.jpg";
// import style sheet
import "./Pages.css";
// import background picture
import "./images/aqua_marble_seamless.png";
// import resume
import resume from './files/resume.pdf';


function About() {
  return (
    <div>
    
      {/* Links to Github Profile, resume, and LinkedIn Profile */}
      <div>
        <div className="row blue-border-top p-2">

          <div className="col-md-4 col-xs-12 text-left">
            <a href="https://github.com/papy1974" target="_blank"  rel="noopener noreferrer" className="text-light">Link to Github Profile</a>
          </div> 

          <div className="col-md-4 col-xs-12 text-center">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="text-light">Link to resume</a>
          </div>

          <div className="col-md-4 col-xs-12 text-right">
            <a href="https://www.linkedin.com/in/papy-lontomba-37796436/" target="_blank"  rel="noopener noreferrer" className="text-light">Link to LinkedIn Profile</a>
          </div> 
        </div> 

      </div>

      <div className="row bg-img blue-border-top">        
        <div className="col-10 offset-1 text-left" style={{height: "500px"}}>
          <h2 className="text-center m-3">A bit about me...</h2>
          {/* my picture */}
          <img src={photo} id="my-pic" alt="Papy's pic"/>
        
          {/* my bio */}
          <p>My name is Mr.Papy Lontomba and I am current student at George Wahington University bootcamp.Also, I am senior system Enginneer from George Mason University . I have an associate degree in Electrical Engineer from Northern Virginia community college.</p>

          <p>
          I am interested in learning about new opportunities and can be reached through this portfolio, by email: papylotomba@yahoo.fr, through GitHub Cheers!</p>

          
        
        </div>
      </div>
 
    </div>
  );
}

export default About;