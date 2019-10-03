import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

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
                <input type="text" id="username" autoComplete="off"/>
              </div>
              <div className="formItemContainer">
                <label htmlFor="password" style={{fontSize: 25}} >Password</label>
                <input type="password" id="password"/>
              </div>
              <div className="controlPanel greatPadding">
                <div className="Button Clear middlePadding" style={{margin: 0}}>Login</div>
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