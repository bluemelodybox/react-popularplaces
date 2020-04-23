import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Toolbar, AppBar } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Popular Places
          </Typography>
          <Button color="inherit">FAQ</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
