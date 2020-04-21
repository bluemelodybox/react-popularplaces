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
  blue: {
    minWidth: 275,
    marginBottom: 4,
    padding: 12,
    paddingBottom: 0,
    background: "#FFC8B4",
  },
});

export default function OutlinedCard({ data }) {
  const classes = useStyles();
  return (
    <Card className={data.current - data.previous > 10 ? classes.blue : classes.root} variant="outlined">
      <a
        href={`https://maps.google.com/?q=${data.location}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", fontSize: "20px", marginBottom: 4 }}
      >
        {data.location}
      </a>
      <Typography component="p" display="inline">
        Current crowd:
      </Typography>
      <Typography component="p" display="inline" color={data.current > 50 ? "error" : "textPrimary"}>
        {" "}
        {data.current}%
      </Typography>
      <Typography variant="body2" color="textSecondary" display="inline" style={{ marginLeft: 20 }}>
        15 mins ago: {data.previous === "No previous record" ? "-" : data.previous}%
      </Typography>
      <TinyLine data={data.popularity} />
    </Card>
  );
}
