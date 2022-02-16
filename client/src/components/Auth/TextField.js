import { styled, TextField } from "@material-ui/core";

export const AuthTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.palette.secondary.main,
  },
}));
