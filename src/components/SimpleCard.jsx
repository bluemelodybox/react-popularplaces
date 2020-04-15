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
  title: {
    // fontSize: 10,
  },
  pos: {
    // marginBottom: 12,
  },
});

export default function OutlinedCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={data.current - data.previous <= 0 ? classes.root : classes.red} variant="outlined">
      <div>
        <Typography variant="h6" component="h2">
          {data.location}
        </Typography>
        <Typography component="p" display="inline">
          Current crowd: {data.current}%
        </Typography>
        <Typography variant="body2" color="textSecondary" display="inline" style={{ marginLeft: 20 }}>
          15 mins ago: {data.previous}%
        </Typography>
        <TinyLine data={data.popularity} />
      </div>
    </Card>
  );
}
