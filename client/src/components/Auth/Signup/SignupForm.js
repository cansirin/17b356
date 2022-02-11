import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  Typography,
} from "@material-ui/core";
import { AuthTextField } from "../TextField";
import { AuthButton } from "../Button";
import React from "react";

export const SignupForm = ({ handleSubmit, formError }) => {
  return (
    <Grid container item direction="column">
      <Box
        sx={{
          justifyContent: "center",
          px: [10, 10, 16, 20],
        }}
      >
        <Typography align="left" variant="h5" sx={{ fontWeight: "600" }}>
          Create an account
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <AuthTextField
              margin="normal"
              fullWidth
              name="username"
              label="Username"
              type="username"
              id="username"
              autoFocus
              required
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <AuthTextField
              margin="normal"
              fullWidth
              id="email"
              label="E-mail Address"
              name="email"
              autoComplete="email"
              required
            />
          </FormControl>
          <FormControl
            margin="normal"
            required
            fullWidth
            error={!!formError.confirmPassword}
          >
            <AuthTextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              required
            />
            <FormHelperText>{formError.confirmPassword}</FormHelperText>
          </FormControl>
          <FormControl
            margin="normal"
            error={!!formError.confirmPassword}
            required
            fullWidth
          >
            <AuthTextField
              fullWidth
              label="Confirm Password"
              aria-label="confirm password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="confirmPassword"
              required
            />
            <FormHelperText>{formError.confirmPassword}</FormHelperText>
          </FormControl>
          <Grid justifyContent="center" container>
            <Box sx={{ p: 8 }}>
              <AuthButton>Create</AuthButton>
            </Box>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};
