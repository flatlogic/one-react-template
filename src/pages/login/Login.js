import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Alert, Button, Label, Input, FormGroup } from "reactstrap";
import Widget from "../../components/Widget";
import { loginUser } from "../../actions/user";
import s from './Login.module.scss';
import signinImg from "../../images/signinImg.svg";
import img1 from "../../images/Vector-1.svg";
import img2 from "../../images/Vector-2.svg";
import img3 from "../../images/Vector-3.svg";
import img4 from "../../images/Vector-4.svg";

class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static isAuthenticated(token) {
    if (token) return true;
  }

  constructor(props) {
    super(props);

    this.state = {
      email: "admin@flatlogic.com",
      password: "password",
    };

    this.doLogin = this.doLogin.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.microsoftLogin = this.microsoftLogin.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  doLogin(e) {
    e.preventDefault();
    this.props.dispatch(
      loginUser({ email: this.state.email, password: this.state.password })
    );
  }

  googleLogin() {
    this.props.dispatch(loginUser({ social: "google" }));
  }

  microsoftLogin() {
    this.props.dispatch(loginUser({ social: "microsoft" }));
  }

  signUp() {
    this.props.history.push("/register");
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/app' } }; // eslint-disable-line

    // cant access login page while logged in
    if (Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
      return (
          <Redirect to={from} />
      );
    }

    return (
      <div className="auth-page">
        <Widget
          className="widget-auth my-auto"
          title={
            <h3 className="mt-0 mb-2" style={{ fontSize: 40 }}>
              Login
            </h3>
          }
        >
          <p className="widget-auth-info">
            Welcome Back! Please login to your account
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
                defaultValue={"admin"}
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
                defaultValue={"123123"}
                onChange={this.changePassword}
                type="password"
                required
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <FormGroup className="checkbox abc-checkbox mb-4 d-flex" check>
              <Input
                id="checkbox1"
                type="checkbox"
              />
              <Label for="checkbox1" check className={"mr-auto"}>
                Remember me
              </Label>
              <a href="/">Forgot password?</a>
            </FormGroup>
            <Button
              type="submit"
              color="warning"
              className="auth-btn mb-3"
              size="sm"
            >
              {this.props.isFetching ? "Loading..." : "Login"}
            </Button>
            <p className="widget-auth-info text-center">Or</p>
            <div className={"d-flex mb-4 mt-3"}>
              <p className={"mb-0"}>Login with</p>
              <a href={"/"}>
                <img src={img1} alt="facebook" className={"ml-3"} />
              </a>
              <a href={"/"}>
                <img src={img2} alt="github" className={"ml-3"} />
              </a>
              <a href={"/"}>
                <img src={img3} alt="linkedin" className={"ml-3"} />
              </a>
              <a href={"/"}>
                <img src={img4} alt="google_plus" className={"ml-3"} />
              </a>
            </div>
            <div className={"d-flex align-items-center"}>
              Don’t have an account?{" "}
              <Link to="register" className={"ml-1"}>
                Sign Up here
              </Link>
            </div>
            <footer className={s.footer}>{new Date().getFullYear()} © One React - React Admin Dashboard Template Made by &nbsp;<a href="https://flatlogic.com" rel="noopener noreferrer" target="_blank">Flatlogic LLC</a></footer>
          </form>
        </Widget>
        <img src={signinImg} alt="signin" className={"backImg"} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
