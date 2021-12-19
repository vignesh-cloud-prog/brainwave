import React, { Component } from "react";
import "../css/nav.css";
import icon from "../images/github.png";
export default class Nav extends Component {
  render() {
    return (
      <nav className="navigation_container">
        <div className="nav_heading">
          <h3>🥇 Advizer </h3>
        </div>

        <div className="github_icon">
          <a
            href="https://github.com/vignesh-cloud-prog/brainwave"
            target="_blank"
            rel="noreferrer"
          >
            <img src={icon} alt="github-icon" />
          </a>
        </div>
      </nav>
    );
  }
}
