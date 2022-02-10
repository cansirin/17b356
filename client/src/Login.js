import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import { LoginForm } from "./components/Auth/Login/LoginForm";
import { AuthLayout } from "./components/Auth/Layout";
import { Header } from "./components/Auth/Login/Header";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <AuthLayout>
      <Grid container item justifyContent="flex-end" alignContent="flex-start">
        <Header history={history} />
      </Grid>
      <LoginForm handleSubmit={handleLogin} />
    </AuthLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
