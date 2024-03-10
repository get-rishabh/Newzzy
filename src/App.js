import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const App = ()=> {
    return (
      <div className="relative w-full h-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 sm:top-5 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] md:top-10"></div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" category="general" />} />
            <Route exact path="/bussiness" element={<News key="bussiness" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" category="health" />} />
            <Route exact path="/science" element={<News key="science" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}
export default App;
