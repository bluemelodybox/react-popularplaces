import React, { useEffect, useState } from "react";
import "./App.css";
import SimpleAppBar from "./components/SimpleAppBar";
import SimpleCard from "./components/SimpleCard";
import { Container, Grid, Typography } from "@material-ui/core";
import MapChart from "./components/MapChart";
import TopCard from "./components/TopCard";
import SortableTable from "./components/SortableTable";

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
        <div></div>
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
                total={placesCovered["Total"]}
                park={placesCovered["Park"]}
                market={placesCovered["Market"]}
                shopping={placesCovered["Shopping Mall"]}
                mrt={placesCovered["Mrt Station"]}
              />
            </Grid>
            <Grid item lg={4} xs={12}>
              <TopCard
                title="Places with high crowd"
                total={highCrowd["Total"]}
                park={highCrowd["Park"]}
                market={highCrowd["Market"]}
                shopping={highCrowd["Shopping Mall"]}
                mrt={highCrowd["Mrt Station"]}
              />
            </Grid>
            <Grid item lg={4} xs={12}>
              <TopCard
                title="Places gaining crowd"
                total={gainingCrowd["Total"]}
                park={gainingCrowd["Park"]}
                market={gainingCrowd["Market"]}
                shopping={gainingCrowd["Shopping Mall"]}
                mrt={gainingCrowd["Mrt Station"]}
              />
            </Grid>
            <Grid item lg={7}>
              <h4 style={{ marginTop: 4 }}>Map of Singapore showing areas with high crowd</h4>
              <div className="legend">
                <p style={styles.CircleRed}></p>
                <p style={{ marginRight: 16 }}>High crowd (places with more than 30% crowd)</p>
                <p style={styles.CircleBlue}></p>
                <p style={{ marginRight: 16 }}>Gaining crowd (more than 5% gain in 15 mins)</p>
              </div>
              <div style={{ height: 480, overflow: "hidden", marginTop: 16 }}>
                <MapChart data={mapData} />
              </div>
            </Grid>
            <Grid item lg={5}>
              <div className="table">
                <SortableTable rows={tableData} />
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
              {lineData["Park"].map((item, key) => (
                <SimpleCard key={key} data={item} />
              ))}
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <h3 align="center">Markets & Food Centers</h3>
              {lineData["Market"].map((item, key) => (
                <SimpleCard key={key} data={item} />
              ))}
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <h3 align="center">Shopping Malls</h3>
              {lineData["Shopping Mall"].map((item, key) => (
                <SimpleCard key={key} data={item} />
              ))}
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <h3 align="center">MRT Stations</h3>
              {lineData["Mrt Station"].map((item, key) => (
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
