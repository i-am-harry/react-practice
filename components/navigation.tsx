import React, {Component} from 'react';

class Navigation extends Component<{},any>{
  constructor(props){
    super(props);
    this.state={
      username:'',
    };
    // this.LoggedInTemplate = this.LoggedInTemplate.bind(this);
  }

  LoggedInTemplate = () => {
    return(
      <div>
          Your are logged In:<br/>
          Username:{this.state.username}
      </div>
    )
  };
  LoggedOutTemplate = ()=>{
      return (
        <div>
          You are Logged Out
        </div>
      );
  };
  render(){

    return (
      this.state.isLoggedIn === false?this.LoggedOutTemplate():this.LoggedInTemplate()
    )

  };
}
export default Navigation