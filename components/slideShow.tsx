import React, { Component } from "react";

class SlideShow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state  = {
      animateContentWords:["Developed","By","Harry Chhabra"],
      animateContentWordsIndex:-1,
      // currentAnimateContentWords
      animateContent : "Welcome",
      animateContentLength : 0,
      currentAnimateContent : '',
      index:-1,
      animateId:undefined,
    }
  }
  animateContentList(){
    let a = setInterval(()=>{
      let currentAnimateContent = this.state.currentAnimateContent;
      let index = this.state.animateContentWordsIndex;
      let len = this.state.animateContentWords.length;
      if(index+1 == len){
        // Last index; Empty string
        currentAnimateContent = '';
        index = -1;
      }else{
        currentAnimateContent += ' ' + this.state.animateContentWords[index+1];
        index += 1;
      }
      this.setState({
        animateContentWordsIndex:index,currentAnimateContent:currentAnimateContent,
      });

    },1000);
    this.setState({animateId:a});
  }
  animateContent(){
    this.setState({animateContentLength:this.state.animateContent.length});
    let a = setInterval(()=>{
      let currentAnimateContent = this.state.currentAnimateContent;
      let index = this.state.index;
      let len = this.state.animateContentLength;
      if(index+1 == len){
        // Last index; Empty string
        currentAnimateContent = '';
        index = -1;
      }else{
        currentAnimateContent += this.state.animateContent[index+1];
        index += 1;
      }
      this.setState({
        index:index,currentAnimateContent:currentAnimateContent,
      });
    },1000);
    this.setState({animateId:a});
  }
  componentDidMount(){
    // this.animateContentList();
  }
  componentWillUnmount(){
    clearInterval(this.state.animateId);
  }

  StaticSlide = () => {
    let imageUrl = "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg";
    let style = {
      height:"75vh",
      backgroundImage:"url(" +imageUrl+ ")",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
    };
    let classes = 'text-light display-2 p-2';
    let animateContent = "Harry Chhabra";
    let index = 0;
    return (
      <div style={style} className={classes}>
        {this.state.currentAnimateContent}
      </div>
    );
  };

  render() {
    return this.StaticSlide();
  }
}

export default SlideShow;
