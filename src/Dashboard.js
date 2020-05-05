import React, { useEffect, useState } from "react";
import "./App.css";
import SimpleAppBar from "./components/SimpleAppBar";
import SimpleCard from "./components/SimpleCard";
import { Container, Grid, Typography } from "@material-ui/core";
import MapChart from "./components/MapChart";
import TopCard from "./components/TopCard";
import SortableTable from "./components/SortableTable";
import SimpleTable from "./components/SimpleTable";

import ProgressBar from "./components/ProgressBar";

const axios = require("axios");

const styles = {
  CircleGreen: {
    height: 12,
    width: 12,
    backgroundColor: "#228B22",
    borderRadius: "50%",
    marginRight: 4,
  },
  CircleOrange: {
    height: 12,
    width: 12,
    backgroundColor: "#FF7F50",
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
  const [placesCovered, setPlacesCovered] = useState({});
  const [highCrowd, setHighCrowd] = useState({});
  const [gainingCrowd, setGainingCrowd] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    axios.get("/data/").then((res) => {
      setLastUpdatedTime(res.data.lastUpdatedTime);
      setPlacesCovered(res.data.placesCovered);
      setHighCrowd(res.data.highCrowd);
      setGainingCrowd(res.data.gainingCrowd);
      setTableData(res.data.tableData);
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
        <ProgressBar />
      ) : (
        <Container maxWidth="xl">
          <div className="header">
            <h3 style={{ marginBottom: 10, marginTop: 16 }}>Dashboard of crowd data in Singapore</h3>
            <p style={{ marginBottom: 10, marginTop: 16, alignItems: "center" }}>Last update: {lastUpdatedTime}</p>
          </div>
          <Grid container spacing={1}>
            <Grid item lg={4} xs={12}>
              <TopCard
                title="Places covered"
                total={placesCovered.total}
                park={placesCovered.park}
                market={placesCovered.market}
                shopping={placesCovered.mall}
                mrt={placesCovered.mrt}
              />
            </Grid>
            <Grid item lg={4} xs={12}>
              <TopCard
                title="Places with high crowd"
                total={highCrowd.total}
                park={highCrowd.park}
                market={highCrowd.market}
                shopping={highCrowd.mall}
                mrt={highCrowd.mrt}
              />
            </Grid>
            <Grid item lg={4} xs={12}>
              <TopCard
                title="Places gaining crowd"
                total={gainingCrowd.total}
                park={gainingCrowd.park}
                market={gainingCrowd.market}
                shopping={gainingCrowd.mall}
                mrt={gainingCrowd.mrt}
              />
            </Grid>
            <Grid item lg={6}>
              <h4 style={{ marginTop: 4 }}>Map of Singapore showing areas with high crowd</h4>
              <div className="legend">
                <p style={styles.CircleRed}></p>
                <p style={{ marginRight: 16 }}>High crowd</p>
                <p style={styles.CircleOrange}></p>
                <p style={{ marginRight: 16 }}>Gaining crowd</p>
              </div>
              <div style={{ height: 480, overflow: "hidden", marginTop: 24 }}>
                <MapChart data={mapData} />
              </div>
            </Grid>
            <Grid item lg={6}>
              <div className="table">
                <SimpleTable data={tableData} title="Popular places" />
              </div>
            </Grid>
            <Grid item lg={12} xs={12}>
              <h2 align="center">Places of Interest</h2>
              <Typography align="center" variant="body2" color="textSecondary">
                Data acquired from Google popular times, updated every 15 minutes
              </Typography>
              <Typography align="center" variant="body2" color="textSecondary">
                Last update: {lastUpdatedTime}
              </Typography>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <h3 align="center">Parks</h3>
              {lineData.park.map((item, key) => (
                <SimpleCard key={key} data={item} />
              ))}
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <h3 align="center">Markets & Food Centers</h3>
              {lineData.market.map((item, key) => (
                <SimpleCard key={key} data={item} />
              ))}
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <h3 align="center">Shopping Malls</h3>
              {lineData.mall.map((item, key) => (
                <SimpleCard key={key} data={item} />
              ))}
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <h3 align="center">MRT Stations</h3>
              {lineData.mrt.map((item, key) => (
                <SimpleCard key={key} data={item} />
              ))}
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default App;
