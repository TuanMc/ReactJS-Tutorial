import React, { Component } from 'react';
import '../../assets/css/sb-admin.min.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';

import { LoginService } from '../../services/login.service';


// Declare a service
const loginService = new LoginService();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    // First way to bind this to function
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "white";
  }

  // UPDATE INPUT FIELDS
  updateUsername(event) {
    this.setState({ username: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  // EVENTS
  handleLoginClick() {
    if (this.state.username.trim() !== "" && this.state.password.trim() !== "") {
      var user = {
        username: this.state.username,
        password: this.state.password
      }

      let isUser = loginService.login(user);
      if (isUser) {
        this.props.history.push("/home");
      }
      else
        console.log("Wrong username or password")
    }
  }

  render() {
    document.body.style.backgroundColor = "#343a40";
    return (
      <div className="container">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Username</label>

                {/* Second way to bind this to a function*/}
                <input className="form-control" onChange={this.updateUsername.bind(this)} type="email" placeholder="Username" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" onChange={this.updatePassword.bind(this)} type="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember Password</label>
                </div>
              </div>
              <a className="btn btn-primary btn-block" onClick={this.handleLoginClick}>Login</a>
            </form>
            <div className="text-center">
              <a className="d-block small mt-3" href="/register">Register an Account</a>
              <a className="d-block small" href="/forget_password">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
