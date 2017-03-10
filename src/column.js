import React, { Component } from 'react';

class Column extends Component{

  constructor(props){
    super(props);
  }

  render(){
    if(this.props.color[0]){
      let url="https://farm"+this.props.color[0].farm+".staticflickr.com/"+this.props.color[0].server+"/"+this.props.color[0].id+"_"+this.props.color[0].secret+".jpg";
      let url1="https://farm"+this.props.color[1].farm+".staticflickr.com/"+this.props.color[1].server+"/"+this.props.color[1].id+"_"+this.props.color[1].secret+".jpg";
      let url2="https://farm"+this.props.color[2].farm+".staticflickr.com/"+this.props.color[2].server+"/"+this.props.color[2].id+"_"+this.props.color[2].secret+".jpg";


      return(
        //var url="https://"+this.props.color[0].farm+".staticflickr.com/"+this.props.color[0].server+"/"+this.props.color[0].id+"_"+this.props.color[0].secret+".jpg";
        //<img src={url}/>
        <div classpath="col-md-2">

        <div classpath="row">
          <img classpath="img-rounded" width="100px" height="100px" src={url}/>
        </div>
        <div classpath="row">
          <img classpath="img-rounded" width="100px" height="100px" src={url1}/>
        </div>
        <div classpath="row">
          <img classpath="img-rounded" width="100px" height="100px" src={url2}/>
        </div>
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
