import { Box, Grid, Paper, SvgIcon, Typography } from "@material-ui/core";
import bg from "../../images/bg-img.png";
import { ReactComponent as Bubble } from "../../images/bubble.svg";
import React from "react";

const styles = {
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
};

export const SideBanner = () => {
  return (
    <Paper style={styles.paperContainer}>
      <Paper style={styles.gradient}>
        <Grid container direction="column" alignItems="center">
          <SvgIcon
            component={Bubble}
            viewBox="0 0 67 67"
            style={{
              height: "67px",
              width: "67px",
            }}
          />
          <Box
            sx={{
              px: [2, 2, 4, 8],
              py: [2, 2, 4, 8],
            }}
          >
            <Typography variant="h4" style={{ color: "white" }} align="center">
              Converse with anyone with any language
            </Typography>
          </Box>
        </Grid>
      </Paper>
    </Paper>
  );
};
