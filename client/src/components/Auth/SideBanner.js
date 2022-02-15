import { Box, Grid, Paper, SvgIcon, Typography } from "@material-ui/core";
import bg from "../../images/bg-img.png";
import { ReactComponent as Bubble } from "../../images/bubble.svg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
  },
  gradient: {
    display: "flex",
    background: "linear-gradient(0deg, #3A8DFF80 0%, #86B9FF 100%)",
    height: "100%",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "67px",
    width: "67px",
  },
  typography: {
    color: "white",
  },
}));

export const SideBanner = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperContainer}>
      <Paper className={classes.gradient}>
        <Grid container direction="column" alignItems="center">
          <Box
            sx={{
              px: [2, 2],
              py: [2, 2],
            }}
          >
            <SvgIcon
              component={Bubble}
              viewBox="0 0 67 67"
              className={classes.icon}
            />
          </Box>
          <Box
            sx={{
              px: [2, 2, 4, 8],
              py: [2, 2, 4, 8],
            }}
          >
            <Typography
              variant="h4"
              className={classes.typography}
              align="center"
            >
              Converse with anyone with any language
            </Typography>
          </Box>
        </Grid>
      </Paper>
    </Paper>
  );
};
