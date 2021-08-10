import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./form";
import auth from "../services/logservice";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  //   username = React.createRef();
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    // call the server

    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      // localStorage.setItem("token", jwt);
      const { state } = this.props.lication;
      window.location = state ? state.from.pathname : "/"; //reload the page
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
