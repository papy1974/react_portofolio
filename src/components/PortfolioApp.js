import React, { Component } from "react";
// import other components
import Header from "./Header";
import Footer from "./Footer";

// rename BrowserRouter to Router (anything can be re-named when imported)
  // Route lets us define routes
import { BrowserRouter as Router, Route} from "react-router-dom";

class PortfolioApp extends Component {
  // set the current page
  state = {
    currentPage: "Home"
  };

  // handle loading a new page
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };  // end of handlePageChange



  // Router has two components: Header & Footer
  // The navbar is in the Header, which controls what page is loaded.
  render() {
    return (
      <Router>
        <Header />
        <div>


        </div>
        <Footer />
      </Router>
    );
  }
}

export default PortfolioApp;
