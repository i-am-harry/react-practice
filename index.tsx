import React, { Component } from 'react';
import { render } from 'react-dom';
import Loading from './components/loading';
import Navbar from './components/navbar';
import SlideShow from './components/slideShow';
import Login from './components/login/login';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<{},any> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Harry Chhabra',
      isLoggedIn:localStorage.getItem('token')?true:false,
      LoadingParameters:{
        isLoading:true,
      },
    };
  }

  componentDidMount(){
    // if(this.state.isLoggedIn == true){
    //   let token = localStorage.getItem('token');
    // }
    // if(this.state.isLoggedIn == false){
    //   let a = this.state.LoadingParameters;
    //   a.isLoading = false;
    //   this.setState({LoadingParameters:a});
    // }
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <hr/>
        <Navbar/>
        <SlideShow/>
      </div>
    );``
  }
}

render(<App />, document.getElementById('root'));
