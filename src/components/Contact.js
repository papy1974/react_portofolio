import React from "react";
// import style sheet
import "./Pages.css";
// import background image
import "./images/aqua_marble_seamless.png";
// import component
import Form from "./Form"


// Contact component has a header and the form component
function Contact() {
  return (  
    <div>

      <div className="row bg-img blue-border-top">
        <div className="col-10 offset-1 text-left">
        
          <h2 className="text-center m-3">I'd love to hear from you!</h2>
    
        </div>
      </div>

      <div className="row bg-img">
        <div className="col-5 offset-4">

          <Form />

        </div>
      </div>
    </div>

  );
}

export default Contact;