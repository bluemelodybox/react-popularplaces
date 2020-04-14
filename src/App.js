import React, { useEffect } from "react";
import "./App.css";
import SimpleAppBar from "./components/SimpleAppBar";
import { Container, Grid } from "@material-ui/core";
import MapChart from "./components/MapChart";
const axios = require("axios");

function App() {
  useEffect(() => {
    axios.get("/data/").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <SimpleAppBar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={7}>
            <MapChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
