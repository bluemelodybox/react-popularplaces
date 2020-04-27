import React, { Fragment } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import SimpleAppBar from "./components/SimpleAppBar";

function About() {
  const style = {
    Grid: {
      paddingTop: 12,
      paddingBottom: 24,
    },
    Tag: {},
  };
  return (
    <Fragment>
      <SimpleAppBar />
      <Container maxWidth="md">
        <Grid style={style.Grid}>
          <h1 style={{ marginBottom: 24 }}>About</h1>
          <Typography>
            Data on dashboard is acquired from Google popular times, updated every 15 minutes. Google uses aggregated
            and anonymised data from users who have opted in to Google location history to make a reasonable estimate of
            how many users are in a given location at any given time of the day.
          </Typography>
          <br></br>

          <div style={{ marginTop: 36 }}>
            <p>High crowd - places that have more than 50% crowd</p>
            <p>Gaining crowd - places that have more than 10% gain in crowd for the past 15 minutes</p>
            <p>
              Usual crowd - shows how active a location typically is currently, based on average popularity over the
              past few months.{" "}
            </p>
            <p>
              Current crowd - shows how active a location is right now as a percentage of its estimated maximum
              capacity.
            </p>
            <p>Crowd ratio - shows how active a location is right now compared to its usual level of activity </p>
            <p>Crowd changes - shows the percentage change in crowd in the last 15 minutes </p>
          </div>
          <div style={{ marginTop: 60 }}>
            <Typography>
              Read more from Google{" "}
              <a href="https://support.google.com/business/answer/6263531" target="_blank" rel="noopener noreferrer">
                <u>here</u>
              </a>
            </Typography>
          </div>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default About;
