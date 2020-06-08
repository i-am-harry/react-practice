import React, {Component} from 'react';

class Login extends Component<any,any>{
  constructor(props){
    super(props);
  }

  validateLogin = (event)=>{
    event.preventDefault();
    let username = event.target['username'].value;
    if(username != 'harry'){
      alert('In-valid Username');
      return;
    }
    localStorage.setItem('username',username);
  };
  LoginForm(){
    return (
      <div>
        Login:
        <form onSubmit={this.validateLogin}>
          Enter Username &nbsp;
          <input name="username" type="text" placeholder="Username"></input>
          <br/>
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    );
  }

  render(){
    return this.LoginForm();
  }

}
export default Login