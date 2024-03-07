import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="relative w-full h-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 sm:top-5 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] md:top-10"></div>

          <Router>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* <Navbar /> */}

                    <News key="general" category="general" />
                  </>
                }
              />

              <Route
                exact
                path="/bussiness"
                element={
                  <>
                    {/* <Navbar /> */}
                    <News key="bussiness" category="business" />
                  </>
                }
              />

              <Route
                exact
                path="/entertainment"
                element={
                  <>
                    {/* <Navbar /> */}
                    <News key="entertainment" category="entertainment" />
                  </>
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <>
                    {/* <Navbar /> */}
                    <News key="health" category="health" />
                  </>
                }
              />

              <Route
                exact
                path="/science"
                element={
                  <>
                    {/* <Navbar /> */}
                    <News key="science" category="science" />
                  </>
                }
              />

              <Route
                exact
                path="/sports"
                element={
                  <>
                    {/* <Navbar /> */}
                    <News key="sports" category="sports" />
                  </>
                }
              />

              <Route
                exact
                path="/technology"
                element={
                  <>
                    {/* <Navbar /> */}
                    <News key="technology" category="technology" />
                  </>
                }
              />
            </Routes>
          </Router>
          {/* <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" /> */}
        </div>
      </>
    );
  }
}
