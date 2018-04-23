import React, { Component } from 'react';
import '../../assets/css/sb-admin.min.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';

import { LoginService } from '../../services/login.service';


// Declare a service
const loginService = new LoginService();

export default class Login extends Component {
  componentWillUnmount() {
    document.body.style.backgroundColor = "white";
  }

  // EVENTS
  // Using arrow function to automatically by this to function or 
  // we can declare in constructor function.
  handleLoginClick = () => {
    if (this.userName.value.trim() !== "" && this.passWord.value.trim() !== "") {
      var user = {
        username: this.userName.value,
        password: this.passWord.value
      }

      let isUser = loginService.login(user);
      if (isUser) {
        this.props.history.push("/home");
      }
      else
        alert("Wrong username or password")
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

                {/* Second way to bind this to a function */}
                {/* Using ref to bind data to a variable */}
                <input className="form-control" placeholder="Username" ref={val => (this.userName = val)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" placeholder="Password" type="password" ref={val => (this.passWord = val)} />
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
