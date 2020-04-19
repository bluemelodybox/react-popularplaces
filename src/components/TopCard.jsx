import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 0,
    padding: 12,
    color: "#334253",
  },
});

export default function TopCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <Typography variant="h4" color="inherit" display="inline">
        {props.total}
      </Typography>
      <Typography display="inline" variant="h6">
        {" "}
        {props.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body2" style={{ margin: 0 }}>
            Parks : {props.park}
          </Typography>
          <Typography variant="body2" style={{ margin: 0 }}>
            Shopping Malls : {props.shopping}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" style={{ margin: 0 }}>
            Market / Food Centers : {props.market}
          </Typography>
          <Typography variant="body2" style={{ margin: 0 }}>
            MRT stations : {props.mrt}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
