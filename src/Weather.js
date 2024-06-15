import "./styles.css";
import React from "react";
import SearchEngine from "./SearchEngine";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <SearchEngine />
      <footer>Created by: Ruella, This code is open sourced on <a href="https://github.com/Ruella-De-Vil/react-weather-app-learning-react">GitHub</a>.</footer>
    </div>
  );
}
