import "./App.css";
import React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";
class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
