import React, { Component } from 'react';
import '../../assets/css/sb-admin.min.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';
// import $ from 'jquery'; => We can apply jquery by run npm install jquery and import to file

import { LoginService } from '../../services/login.service';

const loginService = new LoginService();

export default class Register extends Component {
  // Add Jquery in ReactJS
  handleRegisterClick = () => {
    // let data = $('#exampleInputName').val();
    if (this.pass.value === this.rePass.value) {
      var newUser = {
        username: this.userName.value,
        password: this.pass.value,
        name: this.firstName.value + " " + this.lastName.value
      }
      console.log("new user: ");
      console.log(newUser);
      let isAddNewUserSuccess = loginService.addNewUser(newUser);
      if (isAddNewUserSuccess)
        alert("Your account is successfully added!")
      else
        alert("Problem! Please try again.")
    }
  }

  render() {
    document.body.style.backgroundColor = "#343a40";
    return (
      <div className="register">
        <div className="container">
          <div className="card card-register mx-auto mt-5">
            <div className="card-header">Register an Account</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <div className="form-row">
                    <div className="col-md-6">
                      <label>First name</label>
                      <input className="form-control" placeholder="Enter first name" ref={val => (this.firstName = val)} />
                    </div>
                    <div className="col-md-6">
                      <label>Last name</label>
                      <input className="form-control" placeholder="Enter last name" ref={val => (this.lastName = val)} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input className="form-control" placeholder="Enter username" ref={val => (this.userName = val)} />
                </div>
                <div className="form-group">
                  <div className="form-row">
                    <div className="col-md-6">
                      <label>Password</label>
                      <input className="form-control" type="password" placeholder="Password" ref={val => (this.pass = val)} />
                    </div>
                    <div className="col-md-6">
                      <label>Confirm password</label>
                      <input className="form-control" type="password" placeholder="Confirm password" ref={val => (this.rePass = val)} />
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary btn-block" onClick={this.handleRegisterClick}>Register</a>
              </form>
              <div className="text-center">
                <a className="d-block small mt-3" href="/login">Login Page</a>
                <a className="d-block small" href="/forget_password">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
