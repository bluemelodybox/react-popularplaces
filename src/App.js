import React, { useEffect, useState } from "react";
import "./App.css";
import SimpleAppBar from "./components/SimpleAppBar";
import { Container, Grid } from "@material-ui/core";
import MapChart from "./components/MapChart";
const axios = require("axios");

const styles = {
  CircleGreen: {
    height: 12,
    width: 12,
    backgroundColor: "#228B22",
    borderRadius: "50%",
    marginRight: 4,
  },
  CircleBlue: {
    height: 12,
    width: 12,
    backgroundColor: "#0088cc",
    borderRadius: "50%",
    marginRight: 4,
  },
  CircleRed: {
    height: 12,
    width: 12,
    backgroundColor: "#DC143C",
    borderRadius: "50%",
    marginRight: 4,
  },
};

function App() {
  const [lastUpdatedTime, setLastUpdatedTime] = useState(0);

  useEffect(() => {
    axios.get("/data/").then((res) => {
      console.log(res);
      setLastUpdatedTime(res.data.lastUpdatedTime);
    });
  }, []);

  return (
    <div className="App">
      <SimpleAppBar />
      <Container maxWidth="xl">
        <div className="header">
          <h4 style={{ marginBottom: 0 }}>Map of Singapore showing changes in crowd - Updated every 15 minutes</h4>
          <h4>Last update: {lastUpdatedTime}</h4>
        </div>
        <Grid container spacing={2}>
          <Grid item lg={7}>
            <div className="legend">
              <p style={styles.CircleGreen}></p>
              <p>Decresasing </p>
              <p style={{ marginLeft: 16 }}></p>
              <p style={styles.CircleBlue}></p>
              <p>No changes</p>
              <p style={{ marginLeft: 16 }}></p>
              <p style={styles.CircleRed}></p>
              <p>Increasing </p>
              <p style={{ marginLeft: 16 }}></p>

              <p>(Size of data point is relative to location's crowd size)</p>
            </div>
            <MapChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
