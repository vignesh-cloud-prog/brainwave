import React, { Component } from "react";
import "../css/footer.css";
import facebook from "../images/facebook_logo.png";
import instagram from "../images/instagram_logo.png";
import linkedin from "../images/linkedin_logo.png";
import twitter from "../images/twitter_logo.png";
import github from "../images/github_logo.png";
import website from "../images/globe_logo.png";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Developed by Vignesh</p>
        <span className="footer__socials">
          <a
            href="https://vighnesha.me/"
            rel="noreferrer"
            className="footer__social"
            target="_blank"
          >
            <img src={website} alt="globe_logo" />
          </a>
          <a
            href="https://twitter.com/VigneshNU2"
            rel="noreferrer"
            className="footer__social"
            target="_blank"
          >
            <img src={twitter} alt="twitter_logo" />
          </a>
          <a
            href="https://www.facebook.com/vignesh.viggi.775"
            rel="noreferrer"
            className="footer__social"
            target="_blank"
          >
            <img src={facebook} alt="facebook_logo" />
          </a>

          <a
            href="https://www.instagram.com/vignesh_n_u/"
            rel="noreferrer"
            target="_blank"
            className="footer__social"
          >
            <img src={instagram} alt="instagram_logo" />
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-n-u/"
            rel="noreferrer"
            target="_blank"
            className="footer__social"
          >
            <img src={linkedin} alt="linkedin_logo" />
          </a>
          <a
            href="https://github.com/vignesh-cloud-prog"
            rel="noreferrer"
            target="_blank"
            className="footer__social"
          >
            <img src={github} alt="github_logo" />
          </a>
        </span>
      </footer>
    );
  }
}
