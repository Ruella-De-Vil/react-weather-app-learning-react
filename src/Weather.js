import "./styles.css";
import React from "react";
import SearchEngine from "./SearchEngine";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <SearchEngine />
    </div>
  );
}
