import React from 'react';
import "../../assets/Login.css";
import 'font-awesome/css/font-awesome.min.css';

// This component is created by react-create component Login 
// Ex: react-create component new-component -d
// For more information visit: https://www.npmjs.com/package/react-create 

export default class Login extends React.Component {
  handleLoginClick() {
    console.log("click");
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form method="post">
          <input type="text" name="u" placeholder="Username" required="required" />
          <input type="password" name="p" placeholder="Password" required="required" />
          <button type="submit" className="btn btn-primary btn-block btn-large" onClick={this.handleLoginClick}>Let me in.</button>
        </form>
        <br />
      </div>
    )
  }
}
