// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     "& > * + *": {
//       marginTop: theme.spacing(2),
//     },
//   },
//   colorPrimary: {
//     background: "green",
//   },
// }));

// export default function ProgressBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <LinearProgress color="secondary" />
//     </div>
//   );
// }

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";

class ProgressBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <LinearProgress
        {...this.props}
        classes={{ colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }}
      />
    );
  }
}

const styles = (props) => ({
  colorPrimary: {
    backgroundColor: "#a9a9a9",
  },
  barColorPrimary: {
    backgroundColor: "#787878",
  },
});

export default withStyles(styles)(ProgressBar);
