import React from 'react';
import md5 from 'md5';

import {getCookie, sendRequest} from "../utility";

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: 'darkraven987',
      password: 'megamanx123987',
      loggedUserId: ''
    }
  }

  setUserLogged = () => {
    const { username, password } = this.state;
    const { loginUser } = this;

    let xhr = new XMLHttpRequest();

    xhr.open( 'POST', `http://127.0.0.1:7777/users/auth`, true);

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
      let res = JSON.parse(xhr.response);
      if (!res.length) {
        alert(new Error("Username or password is incorrect!"));
      } else {
         loginUser(res);
      }
    };

    xhr.send(`name=${username}&hash=${md5(username+password)}`);

  };

  loginUser = (val) => {
    this.setState({loggedUserId: val[0].user_id}, () => {
      document.cookie = `user_id=${this.state.loggedUserId}; max-age=0`;
      this.setState({loggedUserId: ''});
      document.location.href = '/';
    });
  };

  registerUser = () => {

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
                <div className="Button Alert middlePadding" style={{margin: 0}}>Register</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default LoginForm;