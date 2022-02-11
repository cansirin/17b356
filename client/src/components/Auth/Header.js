import { Box, Typography } from "@material-ui/core";
import { AuthSecondaryButton } from "./Button";
import React from "react";

export const Header = ({ history, link, text, buttonText }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography color="textSecondary">{text}</Typography>
      <AuthSecondaryButton
        variant="contained"
        onClick={() => history.push(link)}
      >
        {buttonText}
      </AuthSecondaryButton>
    </Box>
  );
};
