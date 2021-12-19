import "./App.css";
import axios from "axios";
import React from "react";
import { createApi } from "unsplash-js";
import { Helmet } from "react-helmet";
import favicon from "./favicon.ico"

class App extends React.Component {
  state = {
    advice: "sky",
    backgroundUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zcGlyYXRpb258ZW58MHx8MHx8&w=1000&q=80",
  };

  componentDidMount() {
    this.fetchQuote();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.advice !== this.state.advice) {
      console.log("pokemons state has changed.");
      this.getImage();
      console.log(this.state.backgroundUrl);
    }
  }
  fetchQuote = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        // console.log(advice);
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getImage = () => {
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
          // console.log(photo.results[0].urls.full);
          const url = photo.results[0].urls.full;
          this.setState({ backgroundUrl: url });
        }
      });
  };
  render() {
    return (
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
        </Helmet>
        <div className="card">
         
          <p className="heading">{this.state.advice}</p>
          
          <button className="button" onClick={this.fetchQuote}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
