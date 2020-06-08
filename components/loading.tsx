import React, {Component} from 'react';

class Loading extends Component<any,any>{
  constructor(props){
    super(props);
    // this.state = {
      // isLoading:true,
    // };
  }
  LoadingTemplate = ()=> {
    return(
      <div className="text-center">
        Loading
      </div>
    );
  };

  render(){
    return this.props.LoadingParameters.isLoading == 1?this.LoadingTemplate():'';
  }

}

export default Loading