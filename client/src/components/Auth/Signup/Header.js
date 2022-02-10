import { Box, Typography } from "@material-ui/core";
import { AuthSecondaryButton } from "../Button";
import React from "react";

export const Header = ({ history }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography color="textSecondary">Already have an account?</Typography>
      <AuthSecondaryButton
        variant="contained"
        onClick={() => history.push("/login")}
      >
        Login
      </AuthSecondaryButton>
    </Box>
  );
};
