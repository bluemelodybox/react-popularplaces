import React, { useEffect } from "react";
import "./App.css";
import SimpleMap from "./components/SimpleMap";

const axios = require("axios");

function App() {
  useEffect(() => {
    axios.get("/data/").then((res) => {
      console.log(res);
      console.log(process.env.GOOGLE_API);
    });
  }, []);

  return (
    <div className="App">
      <SimpleMap></SimpleMap>
    </div>
  );
}

export default App;
