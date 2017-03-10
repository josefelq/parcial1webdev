import React, { Component } from 'react';
import Column from './column';

class Grid extends Component{

  constructor(props){
    super(props);
  }

  render(){
    if(this.props.array.blue){
      return(
      <div classpath="row thegrid">
      <Column color={this.props.array.blue}/>
      </div>
      );
    }
    else{
      return(
        <div></div>
      );
    }


  }

}

export default Grid;
