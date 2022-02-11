import { Box, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { common } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  auth: {
    padding: "15px 60px",
    backgroundColor: theme.palette.primary.main,
    color: common.white,
    fontSize: "14px",
    height: "56px",
    width: "160px",
    left: "0px",
    top: "0px",
  },
  action: {
    height: "54px",
    width: "170px",
    left: "0px",
    top: "0px",
    backgroundColor: common.white,
    color: theme.palette.primary.main,
    fontSize: "14px",
    boxShadow: "0px 2px 12px 0px rgba(74, 106, 149, 0.2)",
  },
}));

export const AuthSecondaryButton = (props) => {
  const classes = useStyles();

  return (
    <Box style={{ padding: "15px" }}>
      <Button className={classes.action} {...props}>
        {props.children}
      </Button>
    </Box>
  );
};

export const AuthButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className={classes.auth}
      {...props}
    >
      {props.children}
    </Button>
  );
};
