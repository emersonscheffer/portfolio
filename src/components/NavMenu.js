import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavMenu extends Component {
  render() {
    return (
      <div id="nav-menu">
        <Link to="/">
          <button>About Me</button>
        </Link>

        <Link to="/portifolio">
          <button>Portfolio</button>
        </Link>
      </div>
    );
  }
}

export default NavMenu;
