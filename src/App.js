import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherSearch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
