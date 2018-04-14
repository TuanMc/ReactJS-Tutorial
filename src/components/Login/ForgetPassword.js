import React, { Component } from 'react';
import '../../assets/css/sb-admin.min.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';

export default class ForgetPassword extends Component {
  render() {
    document.body.style.backgroundColor = "#343a40";
    return (
      <div className="container">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Reset Password</div>
          <div className="card-body">
            <div className="text-center mt-4 mb-5">
              <h4>Forgot your password?</h4>
              <p>Enter your email address and we will send you instructions on how to reset your password.</p>
            </div>
            <form>
              <div className="form-group">
                <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
              </div>
              <a className="btn btn-primary btn-block" href="/login">Reset Password</a>
            </form>
            <div className="text-center">
              <a className="d-block small mt-3" href="/register">Register an Account</a>
              <a className="d-block small" href="/login">Login Page</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
