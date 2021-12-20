import React, { Component } from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";
import axios from "axios";
import bg from "../images/advizer_bg.jpg";
import { createApi } from "unsplash-js";

export default class Main extends Component {
  state = {
    advice: "loading...",
    backgroundUrl: bg,
  };

  async componentDidMount() {
    this.fetchQuote();
  }
  setBgImage = () => {
    const unsplash = createApi({
      accessKey: process.env.REACT_APP_MY_ACCESS_KEY,
    });

    unsplash.search
      .getPhotos({
        query: this.state.advice,
        page: 1,
        perPage: 1,
      })
      .then((result) => {
        if (result.errors) {
          // handle error here
          console.log("error occurred: ", result.errors[0]);
        } else {
          // handle success here
          const photo = result.response;
          console.log(photo.results[0].urls.thumb);
          const url = photo.results[0].urls.small;
          this.setState({ backgroundUrl: url });
        }
      });
  };
  fetchQuote = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        // console.log(advice);
        this.setState({ advice }, () => {
          this.setBgImage();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <main>
        <div
          className="app"
          style={{ backgroundImage: `url(${this.state.backgroundUrl})` }}
        >
          <Helmet>
            <title>Advizer</title>
            <meta
              name="description"
              content="Get the most inspirational quotes at your finger tips. "
            />
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
              rel="stylesheet"
            ></link>

            <link
              href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@500&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <div className="card">
            <b className="heading">"{this.state.advice}"</b>

            <button className="button" onClick={this.fetchQuote}>
              <span>ONE MORE ADVICE!</span>
            </button>
          </div>
        </div>
      </main>
    );
  }
}
