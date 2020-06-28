import React, { useState } from "react";
// import stylesheets used
import "./Pages.css";
import "./Portfolio.css";
// import background image
import "./images/aqua_marble_seamless.png";
// import information about projects for Portfolio page
import projects from "./projects.json";
// import components used
import Project from "./Project";
import Technology from "./Technology";
// these are bootstrap components
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
// import images for each of the apps on the Portfolio page.
const icons = [
    require('./images/icons/burger.png'),
    require('./images/icons/note.png'),
    require('./images/icons/project1.png'),
    // require('./images/icons/employee-dir.png'),
    require('./images/icons/project2.png'),
    // require('./images/icons/burger.png'),
    require('./images/icons/quiz.png'),
    // require('./images/icons/calendar-screenshot.png'),
    require('./images/icons/weather-dashboard.png'),
    // require('./images/icons/quiz-screenshot.png'),
];

// technologies used for this app (ReactPortfolio), to be displayed when
//  that button is clicked
const technologies = ["React w/function-based components", "React-bootstrap", "Bootstrap", "Node.js", "emailjs", "React-router-dom", "HTML", "CSS"];

function Portfolio() {

  // setup to display popup of technologies used for this ReactPortfolio app
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  
    <div className="row bg-img blue-border-top mt-0 font-size-18">
      <div className="col-10 offset-1 text-left">

        <h2 className="text-center m-3">Portfolio</h2>
        {/* Button to see technologies used in this app (ReactPortfolio) */}
        <div className="text-center">
          <Button className="mb-3 mt-1 project" variant="secondary" onClick={handleShow}>
                        Click for technologies used in this Portfolio App.
          </Button>
        </div>

        {/* Components to handle popup with technologies for ReactPortfolio app */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
             <Modal.Title>Technologies Used for this Portfolio App:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    {technologies.map((technology) => (
                        <Technology 
                            technology={technology}
                        />
                    ))}
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close 
              </Button>
          </Modal.Footer>
        </Modal>

        {/* renders the Project component for each project in the projects array imported */}
        <div className="icons text-light mb-2">

          {projects.map((project, index) => (
            <Project  
              name={project.name}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              image={icons[index]} 
              alt={project.alt}
              technologies={project.technologies}
              description={project.description}
            />

          ))}

        </div>
      </div>
    </div>
        
  );
}

export default Portfolio;