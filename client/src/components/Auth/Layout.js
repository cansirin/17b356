import { Grid } from "@material-ui/core";
import React from "react";
import { SideBanner } from "./SideBanner";

export const AuthLayout = ({ children }) => {
  return (
    <Grid container component="main" style={{ height: "100vh" }}>
      <Grid container item sm={5} md={4}>
        <SideBanner />
      </Grid>
      <Grid container item xs={12} sm={7} md={8}>
        {children}
      </Grid>
    </Grid>
  );
};
