import { Grid } from "@material-ui/core";
import React from "react";
import { SideBanner } from "./SideBanner";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  fullHeight: {
    height: "100vh",
  },
}));

export const AuthLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.fullHeight}>
      <Grid container item sm={5} md={4}>
        <SideBanner />
      </Grid>
      <Grid container item xs={12} sm={7} md={8}>
        {children}
      </Grid>
    </Grid>
  );
};
