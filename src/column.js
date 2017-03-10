import React, { Component } from 'react';

class Column extends Component{

  constructor(props){
    super(props);
  }

  render(){
    if(this.props.color[0]){
      const url="https://farm"+this.props.color[0].farm+".staticflickr.com/"+this.props.color[0].server+"/"+this.props.color[0].id+"_"+this.props.color[0].secret+".jpg";
      return(
        //var url="https://"+this.props.color[0].farm+".staticflickr.com/"+this.props.color[0].server+"/"+this.props.color[0].id+"_"+this.props.color[0].secret+".jpg";
        //<img src={url}/>
        <div classpath="row pics">
          <img src={url}/>
        </div>
      );

    }
    else{
      return(
        <div classpath="row"></div>
      );
    }

  }

}

export default Column;
