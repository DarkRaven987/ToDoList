import React from 'react';
import md5 from 'md5';

import {getCookie, sendRequest} from "../utility";

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      serverResponse: ''
    }
  }

  setUserLogged = () => {
    const { username, password } = this.state;
    const { loginUser } = this;

    sendRequest('POST', '/users/auth', `name=${username}&hash=${md5(username+password)}`, loginUser);

  };

  setUserRegistered = () => {
    const { username, password } = this.state;
    const { registerUser } = this;

    sendRequest('POST', '/users/register', `name=${username}&hash=${md5(username+password)}`, registerUser);
  };

  loginUser = (val) => {
    if (!JSON.parse(val).length) {
      alert('Username or password is incorrect. Please, try again.');
      return null;
    }

    const result = JSON.parse(val)[0].user_id;
    this.setState({serverResponse: result}, () => {
      document.cookie = `user_id=${this.state.serverResponse}; max-age=43200`;
      this.setState({serverResponse: ''});
      document.location.href = '/';
    });
  };

  registerUser = (val) => {
    this.setState({serverResponse: val}, () => {
      !!Number(this.state.serverResponse)  ?
        alert('User has been registered successfully.')
        :
        alert('This username is already in use. Pick another one.') ;
      this.setState({serverResponse: ''});
    });
  };

  handleUsername = (e) => {
    this.setState({username: e.target.value});
  };

  handlePassword = (e) => {
    this.setState({password: e.target.value});
  };

  render(){
    return(
      <div className="container">
        <div className="content_container loginForm">
          <div className="middleSizeTitle borderWithTitle">
          <span className="middleSizeTitle">
            Login
          </span>
            <form className="loginFormContent" action="">
              <div className="formItemContainer">
                <label htmlFor="username" style={{fontSize: 25}} >Username</label>
                <input type="text" id="username" value={this.state.username} onChange={(e) => this.handleUsername(e)} autoComplete="off"/>
              </div>
              <div className="formItemContainer">
                <label htmlFor="password" style={{fontSize: 25}} >Password</label>
                <input type="password" id="password" value={this.state.password} onChange={(e) => this.handlePassword(e)}/>
              </div>
              <div className="controlPanel greatPadding">
                <div className="Button Clear middlePadding" style={{margin: 0}} onClick={ () => this.setUserLogged()}>Login</div>
                <div className="Button Alert middlePadding" style={{margin: 0}} onClick={ () => this.setUserRegistered()}>Register</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default LoginForm;