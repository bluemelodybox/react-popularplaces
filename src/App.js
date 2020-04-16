import React, { useEffect, useState } from "react";
import "./App.css";
import SimpleAppBar from "./components/SimpleAppBar";
import SimpleCard from "./components/SimpleCard";
import { Container, Grid, Typography } from "@material-ui/core";
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
          <Grid container spacing={1}>
            <Grid item lg={12} xs={12}>
              <h2 align="center">Places of Interest</h2>
              <Typography align="center" variant="body2" color="textSecondary">
                Data acquired from Google popular times, updated every 15 minutes
              </Typography>
              <Typography align="center" variant="body2" color="textSecondary">
                Last update: {lastUpdatedTime}
              </Typography>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <h3 align="center">Parks</h3>
              <div className="cards">
                {lineData.slice(0, 5).map((item, key) => (
                  <SimpleCard key={key} data={item} />
                ))}
              </div>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <h3 align="center">Markets & Food Centers</h3>
              <div className="cards">
                {lineData.slice(5, 10).map((item, key) => (
                  <SimpleCard key={key} data={item} />
                ))}
              </div>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <h3 align="center">Shopping Malls</h3>
              <div className="cards">
                {lineData.slice(10, 15).map((item, key) => (
                  <SimpleCard key={key} data={item} />
                ))}
              </div>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <h3 align="center">MRT Stations</h3>
              <div className="cards">
                {lineData.slice(15, 20).map((item, key) => (
                  <SimpleCard key={key} data={item} />
                ))}
              </div>
            </Grid>
            <Grid item lg={12}>
              <div className="header">
                <h4 style={{ marginBottom: 0 }}>Map of Singapore showing changes in crowd</h4>
                <h4>Last update: {lastUpdatedTime}</h4>
              </div>
              <div className="legend">
                <p style={styles.CircleGreen}></p>
                <p style={{ marginRight: 16 }}>Decresasing </p>
                <p style={styles.CircleBlue}></p>
                <p style={{ marginRight: 16 }}>No changes</p>
                <p style={styles.CircleRed}></p>
                <p style={{ marginRight: 16 }}>Increasing </p>
                <p>(Size of data point is relative to location's crowd size)</p>
              </div>
              <div style={{ height: "82vh", overflow: "hidden", marginTop: "2vh" }}>
                <MapChart data={mapData} />
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default App;
