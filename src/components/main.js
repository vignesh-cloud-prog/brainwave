import React, { Component } from "react";
import axios from "axios";
import bg from "../images/advizer_bg.jpg";
import { createApi } from "unsplash-js";
import "../css/loader.css";
export default class Main extends Component {
  state = {
    advice: "loading...",
    backgroundUrl: bg,
    quoteLoading: false,
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
    this.setState({ quoteLoading: true });
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        // console.log(advice);
        this.setState({ advice }, () => {
          this.setBgImage();
        });
        this.setState({ quoteLoading: false });
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
          <div className="card">
            <b className="heading">"{this.state.advice}"</b>

            <button className="button" onClick={this.fetchQuote}>
              {this.state.quoteLoading ? (
                <>
                  <div class="spinner6 p1"></div>
                  <div class="spinner6 p2"></div>
                  <div class="spinner6 p3"></div>
                  <div class="spinner6 p4"></div>
                </>
              ) : (
                <span>ONE MORE ADVICE!</span>
              )}
            </button>
          </div>
        </div>
      </main>
    );
  }
}
