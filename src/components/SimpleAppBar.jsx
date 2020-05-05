import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Toolbar, AppBar, Link, IconButton } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

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
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function SimpleAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component="a" href="/">
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Home"></ListItemText>
        </ListItem>
        <ListItem button component="a" href="/analysis">
          <ListItemIcon>
            <TrendingUpRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Analysis"></ListItemText>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
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
