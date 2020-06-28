import React, { useState } from "react";
// get stylesheets used
import "./Pages.css";
import "./Portfolio.css";
// get component used
import Technology from "./Technology";
// get Bootstrap packages & components used
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// padding around screenshot (image) of each project
const padding = { padding: "70px 20px 20px"};

export default function Project(props) {

    // setup for pop up windows to display technologies used for an app.
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="work">

            {/* Image and name for the app */}
            <div className="project mb-0">
                <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
                    <img src={props.image} alt={props.alt} style={padding}  />
                    <h3 className="bg-blue rounded"><strong>{props.name}</strong></h3>
                </a>
            </div> {/* <!-- end of project div for image link to application --> */}

            {/* Description of the app */}
            <div className="paragraph mb-0 mx-3">
                <p>{props.description}</p>
            </div> {/* <!-- end of project div for description of app --> */}
            
            <hr mx-3></hr>

            {/* Link to Github page */}
            <div className="project mb-0">
                <a href={props.githubLink} className="text-dark" target="_blank" rel="noopener noreferrer">Github page: <strong>{props.name}</strong>.</a>
            </div> {/*  <!-- end of project div for github link --> */}

            {/* Click for popup of technologies used */}
            <div className="text-center">
                <Button className="mb-3 mt-1 project" variant="secondary" onClick={handleShow}>
                        Click for technologies used.
                </Button>
            </div>

            {/* components to hide or display popup with technologies used */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Technologies Used for {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.technologies.map((technology) => (
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

        </div> 
    );
}