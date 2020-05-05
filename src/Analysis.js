import React, { useEffect, useState, Fragment } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import SimpleAppBar from "./components/SimpleAppBar";
import SimpleLine from "./components/SimpleLine";
import AnalysisTable from "./components/AnalysisTable";

const axios = require("axios");
const style = {
  Grid: {
    paddingBottom: 24,
  },
};

export default function Analysis(props) {
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
    <Fragment>
      <SimpleAppBar />
      <Container maxWidth="xl">
        {/* <Grid style={style.Grid}>
          <h3>Analysis for the day 12-04-2020</h3>
          <h3 style={{ marginBottom: 12, marginLeft: 8 }}>Park</h3>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={7} xs={12}>
            <SimpleLine />
          </Grid>
          <Grid item lg={5} xs={12}>
            <AnalysisTable />
          </Grid>
        </Grid>
        <Grid style={style.Grid}>
          <h4 style={{ marginBottom: 12, marginLeft: 8 }}>Mall</h4>
        </Grid> */}
      </Container>
    </Fragment>
  );
}
