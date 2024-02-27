import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="h-full bg-gradient-to-r from-[#9dd2de] from-1% to-white">
          <News />
        </div>
      </>
    );
  }
}
