import React, { Component } from 'react';
import '../../assets/css/sb-admin.min.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';

export default class Login extends Component {
  render() {
    document.body.style.backgroundColor = "#343a40";
    return (
      <div className="container">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember Password</label>
                </div>
              </div>
              <a className="btn btn-primary btn-block" href="/home">Login</a>
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
