import React, { useEffect, useState } from "react";
import "./App.css";
import SimpleAppBar from "./components/SimpleAppBar";
import SimpleCard from "./components/SimpleCard";
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
  const [lastUpdatedTime, setLastUpdatedTime] = useState(null);
  const [mapData, setMapData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    axios.get("/data/").then((res) => {
      setLastUpdatedTime(res.data.lastUpdatedTime);
      setMapData(res.data.mapData);
      setLineData(res.data.lineData);
      setPageLoading(false);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <SimpleAppBar />
      {pageLoading ? (
        <div></div>
      ) : (
        <Container maxWidth="xl">
          <div className="header">
            <h4 style={{ marginBottom: 0 }}>Map of Singapore showing changes in crowd - Updated every 15 minutes</h4>
            <h4>Last update: {lastUpdatedTime}</h4>
          </div>
          <Grid container spacing={4}>
            <Grid item lg={8}>
              <div className="legend">
                <p style={styles.CircleGreen}></p>
                <p style={{ marginRight: 16 }}>Decresasing </p>
                <p style={styles.CircleBlue}></p>
                <p style={{ marginRight: 16 }}>No changes</p>
                <p style={styles.CircleRed}></p>
                <p style={{ marginRight: 16 }}>Increasing </p>
                <p>(Size of data point is relative to location's crowd size)</p>
              </div>
              <MapChart data={mapData} />
            </Grid>
            <Grid item lg={4} style={{ marginTop: "12px" }}>
              <div className="cards">
                {lineData.map((item, key) => (
                  <SimpleCard key={key} data={item} />
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default App;
