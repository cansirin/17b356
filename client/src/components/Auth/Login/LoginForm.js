import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import { AuthTextField } from "../TextField";
import { AuthButton } from "../Button";

export const LoginForm = ({ handleSubmit }) => {
  return (
    <Grid container item direction="column">
      <Box
        sx={{
          justifyContent: "center",
          px: [2, 10, 16, 20],
        }}
      >
        <Typography align="left" variant="h5" sx={{ fontWeight: "600" }}>
          Welcome back!
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <AuthTextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              required
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <AuthTextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Link href="/forgot" variant="subtitle1">
                      Forgot?
                    </Link>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Grid justifyContent="center" container>
            <Box sx={{ p: 8 }}>
              <AuthButton>Login</AuthButton>
            </Box>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};
