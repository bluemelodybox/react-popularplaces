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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Typography variant="h6" component="h2">
        {data.location}
      </Typography>

      <Typography className={classes.pos} component="p" display="inline">
        Current crowd: {data.current}
      </Typography>
      <Typography variant="body2" color="textSecondary" display="inline" style={{ marginLeft: 20 }}>
        Previous Crowd: {data.previous}
      </Typography>
      <TinyLine data={data.popularity} />
    </Card>
  );
}
