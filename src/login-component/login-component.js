import React, { Component } from 'react';


// This component is created by react-create component Login 
// For more information visit: https://www.npmjs.com/package/react-create 

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-component">
        { this.props.children }
      </div>
    )
  }
}
