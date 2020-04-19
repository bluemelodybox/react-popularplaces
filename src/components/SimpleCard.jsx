import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TinyLine from "./TinyLine";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 4,
    padding: 12,
    paddingBottom: 0,
  },
  red: {
    minWidth: 275,
    marginBottom: 4,
    padding: 12,
    paddingBottom: 0,
    background: "#f8d2d2",
  },
});

export default function OutlinedCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <a
        href={`https://maps.google.com/?q=${data.location}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", fontSize: "20px", marginBottom: 4 }}
      >
        {data.location}
      </a>
      <Typography component="p" display="inline">
        Current crowd: {data.current}%
      </Typography>
      <Typography variant="body2" color="textSecondary" display="inline" style={{ marginLeft: 20 }}>
        15 mins ago: {data.previous === "No previous record" ? "-" : data.previous}%
      </Typography>
      <TinyLine data={data.popularity} />
    </Card>
  );
}
