import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Tetyana N. and is{" "}
          <a href="https://github.com/tetyana-br/react-weather-app">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
