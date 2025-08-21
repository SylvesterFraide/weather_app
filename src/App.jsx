import React from "react";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="app">
      <Weather Humidity="Humidity" WindSpeed="Wind Speed" />
    </div>
  );
}
export default App;
