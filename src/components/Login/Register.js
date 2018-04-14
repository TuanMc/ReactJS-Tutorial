import React, { Component } from 'react';
import '../../assets/css/sb-admin.min.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';

export default class Register extends Component {
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
                      <input className="form-control" id="exampleInputName" type="text" aria-describedby="nameHelp" placeholder="Enter first name" />
                    </div>
                    <div className="col-md-6">
                      <label>Last name</label>
                      <input className="form-control" id="exampleInputLastName" type="text" aria-describedby="nameHelp" placeholder="Enter last name" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <div className="form-row">
                    <div className="col-md-6">
                      <label>Password</label>
                      <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" />
                    </div>
                    <div className="col-md-6">
                      <label>Confirm password</label>
                      <input className="form-control" id="exampleConfirmPassword" type="password" placeholder="Confirm password" />
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary btn-block" href="/login">Register</a>
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
