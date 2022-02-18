import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold"
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
  userImageMessage: {
    maxHeight: "300px",
    maxWidth: "200px",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  attachments: {
    rowGap: "10px",
    columnGap: "10px",
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-end"
        className={classes.attachments}
      >
        {attachments &&
          attachments.map((attachment, idx) => {
            return (
              <img
                alt="attachment"
                src={attachment}
                key={idx}
                className={classes.userImageMessage}
              />
            );
          })}
      </Grid>
      {text !== "" && (
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default SenderBubble;
