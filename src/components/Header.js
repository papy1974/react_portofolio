import React from "react";
import NavTabs from "./NavTabs";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import './Header.css';


import { BrowserRouter as Router, Route} from "react-router-dom";

function Header() {
  return (
  
    <header>

      <div className="row">
        <div className="col-12 text-center">
          <div className="bg-blue">
            <h1 className="pt-3 pb-0 mb-0 text-light border-0">Papy E Lontomba</h1> 
          </div>
        </div>
      </div>

      <div className="col-12 bg-blue " id="nav">
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
      
    </header>

  );
}

export default Header;