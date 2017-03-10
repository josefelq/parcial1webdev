import React, { Component } from 'react';
import Column from './column';

class Grid extends Component{

  constructor(props){
    super(props);
  }

  render(){
      return(
        <div className="row">
          <div className="col-md-12">
        <Column color={this.props.array.blue}/>
        <Column color={this.props.array.red}/>
        <Column color={this.props.array.green}/>
        <Column color={this.props.array.yellow}/>
        <Column color={this.props.array.orange}/>
        <Column color={this.props.array.purple}/>
        </div>
      </div>

      );
  }

}

export default Grid;
