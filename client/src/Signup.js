import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import { AuthLayout } from "./components/Auth/Layout";
import { SignupForm } from "./components/Auth/Signup/SignupForm";
import { Header } from "./components/Auth/Header";

const Signup = (props) => {
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <AuthLayout>
      <Grid container item justifyContent="flex-end" alignContent="flex-start">
        <Header
          history={history}
          link="/login"
          text="Already have an account?"
          buttonText="Login"
        />
      </Grid>
      <SignupForm handleSubmit={handleRegister} formError={formErrorMessage} />
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
