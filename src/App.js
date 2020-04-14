import React from "react";
import "./App.css";

const axios = require("axios");

function App() {
  useEffect(() => {
    axios.get("/data/").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}

export default App;
