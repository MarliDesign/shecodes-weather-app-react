import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <WeatherSearch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
