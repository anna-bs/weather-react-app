import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/anna-bs/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Anna Bilousova
        </footer>
      </div>
    </div>
  );
}

export default App;
