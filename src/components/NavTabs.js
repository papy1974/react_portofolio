import React from "react";
// to make router work
import {Link} from "react-router-dom";

// NavTabs is the navbar, and controls what page is loaded.
function NavTabs() {
  return (
    
    <div className="navbar justify-content-between">
      {/* Sub-header with my name and phone number */}
      <ul className="list-unstyled ml-2 mt-2 mb-1">
        <li className="text-light">papylotomba@yahoo.fr</li>
        <li className="text-light">5715053703</li>
      </ul>

      <ul className="nav nav-tabs border-bottom-0">
        {/* Link to "About me" (Home) page */}
        <li className="nav-item">
          <Link
            to="/about"
            className={window.location.pathname === "/about"  ? "nav-link text-light" : "nav-link text-light"}
          >About</Link>
        </li>

        {/* Link to Portfolio page */}
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={window.location.pathname === "/portfolio"  ? "nav-link text-light" : "nav-link text-light"}
          >Portfolio</Link>
        </li>

        {/* Linke to Contact page */}
        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact"  ? "nav-link text-light" : "nav-link text-light"}
          >Contact</Link>
        </li>
        
      </ul>
    </div>
 
  );
}

export default NavTabs;
