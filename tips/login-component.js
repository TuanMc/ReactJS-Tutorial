import React from 'react';
import { withRouter } from 'react-router';
import "../../assets/Login.css";
import 'font-awesome/css/font-awesome.min.css';

// This component is created by react-create component Login 
// Ex: react-create component new-component -d
// For more information visit: https://www.npmjs.com/package/react-create 

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    this.props.history.push("/home");
  }

  functionTaoLao() {
    
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form method="">
          <input type="text" placeholder="Username" required="required" />
          <input type="password" placeholder="Password" required="required" />
          <button type="submit" className="btn btn-primary btn-block btn-large" onClick={this.handleLoginClick}>Let me in.</button>
        </form>
        <br />
      </div>
    )
  }
}

export default withRouter(Login);