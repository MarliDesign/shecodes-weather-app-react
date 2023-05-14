import "./App.css";
import React from "react";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
