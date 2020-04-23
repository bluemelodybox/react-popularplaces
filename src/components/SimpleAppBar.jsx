import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Toolbar, AppBar, Link } from "@material-ui/core/";

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
            <Link href="/" color="inherit" underline="none">
              Popular Places{" "}
            </Link>
          </Typography>
          <Button color="inherit" href="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
