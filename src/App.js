import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <Footer />
    </div>
  );
}

export default App;
