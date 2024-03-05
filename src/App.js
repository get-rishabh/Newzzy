import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-x-hidden" >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                   
                  <News key="general" category="general" />
                  
                </>
              }
            />

            <Route
              exact
              path="/bussiness"
              element={
                <>
                  <Navbar />
                  <div className="h-full bg-gradient-to-r from-[#9dd2de] from-1% to-white">
                    <News key="business" category="business" />
                  </div>
                </>
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <>
                  <Navbar />
                  <div className="h-full bg-gradient-to-r from-[#9dd2de] from-1% to-white">
                    <News key="entertainment" category="entertainment" />
                  </div>
                </>
              }
            />
            <Route
              exact
              path="/health"
              element={
                <>
                  <Navbar />
                  <div className="h-full bg-gradient-to-r from-[#9dd2de] from-1% to-white">
                    <News key="health" category="health" />
                  </div>
                </>
              }
            />

            <Route
              exact
              path="/science"
              element={
                <>
                  <Navbar />
                  <div className="h-full bg-gradient-to-r from-[#9dd2de] from-1% to-white">
                    <News key="science" category="science" />
                  </div>
                </>
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <>
                  <Navbar />
                  <div className="h-full bg-gradient-to-r from-[#9dd2de] from-1% to-white">
                    <News key="sports" category="sports" />
                  </div>
                </>
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <>
                  <Navbar />
                  <div className="h-full bg-gradient-to-r from-[#9dd2de] from-1% to-white">
                    <News key="technology" category="technology" />
                  </div>
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
