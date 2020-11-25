import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Alert, Button, Label, FormGroup, Input } from "reactstrap";
import Widget from "../../components/Widget";
import { registerUser, registerError } from "../../actions/register";
import { loginUser } from "../../actions/user";
import Login from "../login";
import signupImg from "../../images/signupImg.svg";
import s from './Register.module.scss';

import img1 from "../../images/Vector-1.svg";
import img2 from "../../images/Vector-2.svg";
import img3 from "../../images/Vector-3.svg";
import img4 from "../../images/Vector-4.svg";

class Register extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    this.doRegister = this.doRegister.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.microsoftLogin = this.microsoftLogin.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.isPasswordValid = this.isPasswordValid.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  changeConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  checkPassword() {
    if (!this.isPasswordValid()) {
      if (!this.state.password) {
        this.props.dispatch(registerError("Password field is empty"));
      } else {
        this.props.dispatch(registerError("Passwords are not equal"));
      }
      setTimeout(() => {
        this.props.dispatch(registerError());
      }, 3 * 1000);
    }
  }

  isPasswordValid() {
    return (
      this.state.password && this.state.password === this.state.confirmPassword
    );
  }

  doRegister(e) {
    e.preventDefault();
    this.props.dispatch(
      registerUser({
        creds: {
          email: this.state.email,
          password: this.state.password,
        },
        history: this.props.history,
      })
    );
  }

  googleLogin() {
    this.props.dispatch(loginUser({ social: "google" }));
  }

  microsoftLogin() {
    this.props.dispatch(loginUser({ social: "microsoft" }));
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/app" },
    }; // eslint-disable-line

    // cant access login page while logged in
    if (Login.isAuthenticated(localStorage.getItem("authenticated"))) {
      return <Redirect to={from} />;
    }

    return (
      <div className="auth-page">
        <Widget
          className="widget-auth my-auto"
          title={
            <h3 className="mt-0 mb-2" style={{ fontSize: 40 }}>
              Sing up
            </h3>
          }
        >
          <p className="widget-auth-info">
            Welcome! Please create your account
          </p>
          <form className="mt" onSubmit={this.doLogin}>
            {this.props.errorMessage && (
              <Alert className="alert-sm" color="danger">
                {this.props.errorMessage}
              </Alert>
            )}
            <div className="form-group">
              <Label for="search-input1">Username</Label>
              <input
                className="form-control"
                defaultValue={""}
                onChange={this.changeEmail}
                required
                name="email"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group mb-2">
              <Label for="search-input1">Password</Label>
              <input
                className="form-control"
                defaultValue={""}
                onChange={this.changePassword}
                type="password"
                required
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <FormGroup className="checkbox abc-checkbox mb-4 d-flex" check>
              <>
                <Input
                  id="checkbox1"
                  type="checkbox"
                  style={{ marginLeft: 3 }}
                />
                <Label for="checkbox1" check>
                  Remember me
                </Label>
              </>
            </FormGroup>
            <Button
              type="submit"
              color="warning"
              className="auth-btn mb-3"
              size="sm"
              onClick={(e) => this.doRegister(e)}
            >
              {this.props.isFetching ? "Loading..." : "Singup"}
            </Button>
            <p className="widget-auth-info text-center mb-0">Or</p>
            <div className={"d-flex mb-4 mt-3"}>
              <p className={"mb-0"}>Login with</p>
              <a href={"/"}>
                <img src={img1} alt="" className={"ml-3"} />
              </a>
              <a href={"/"}>
                <img src={img2} alt="" className={"ml-3"} />
              </a>
              <a href={"/"}>
                <img src={img3} alt="" className={"ml-3"} />
              </a>
              <a href={"/"}>
                <img src={img4} alt="" className={"ml-3"} />
              </a>
            </div>
            <div className={"d-flex align-items-center"}>
              Have an account?{" "}
              <Link to="login" className={"ml-1"}>
                Login here
              </Link>
            </div>
            <footer className={s.footer}>{new Date().getFullYear()} © One React - React Admin Dashboard Template Made by &nbsp;<a href="https://flatlogic.com" rel="noopener noreferrer" target="_blank">Flatlogic LLC</a></footer>
          </form>
        </Widget>
        <img
          src={signupImg}
          alt="signin"
          className={"backImg"}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.register.isFetching,
    errorMessage: state.register.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Register));
