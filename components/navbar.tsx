import React, {Component} from 'react';

class Navbar extends Component<any,any>{
  constructor(props){
    super(props);
    this.state = {
      navbarOptions : ['Home','About'],
    };
  }
  navbarOptions = ['Home','About'];

  NavbarTemplate = (
    <ul className="" style={{listStyleImage:"none"}}>
    {this.navbarOptions.map(i=>(
      <li className="d-inline-block p-2 mx-2">
        {i}
      </li>
    ))}
    </ul>
  );
  render(){
    return this.NavbarTemplate;
  }
}

export default Navbar