import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './grid';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value: '',
      cool: true,
      blue:[],
      red:[],
      green:[],
      yellow:[],
      orange:[],
      purple:[]
    };

    this.handleChange=this.handleChange.bind(this);

    this.switch=this.switch.bind(this);
  }


  handleChange(event){
      this.setState({value: event.target.value});

      //api call and set photos[]
      if(this.state.value){
      fetch('/flickr/'+this.state.value+' blue')
      .then(result => {
        result.json().then(data => {
          this.setState({blue: data.photos.photo});
        });
      });

      fetch('/flickr/'+this.state.value+' red')
      .then(result => {
        result.json().then(data => {
          this.setState({red: data.photos.photo});
        });
      });

      fetch('/flickr/'+this.state.value+' green')
      .then(result => {
        result.json().then(data => {
          this.setState({green: data.photos.photo});
        });
      });

      fetch('/flickr/'+this.state.value+' yellow')
      .then(result => {
        result.json().then(data => {
          this.setState({yellow: data.photos.photo});
        });
      });

      fetch('/flickr/'+this.state.value+' orange')
      .then(result => {
        result.json().then(data => {
          this.setState({orange: data.photos.photo});
        });
      });

      fetch('/flickr/'+this.state.value+' purple')
      .then(result => {
        result.json().then(data => {
          this.setState({purple: data.photos.photo});
        });
      });
    }
  }

  switch(){
    if(this.state.cool){
      this.setState({cool: false});
    }
    else{
      this.setState({cool: true});
    }
  }

  render() {
    return (
      <div className="row">
        <h1>Flickr Rainbow</h1>
        <small>Search for something on Flickr and we will get a rainbow of it</small>
         <p>By <a href="https://github.com/josefelq">José Felipe Quiroga</a></p>
         <a onClick={this.switch}>Switch!</a>
        <br />
        <form>
          <input type="text" value={this.state.value} onChange={this.handleChange}/><br/>
        </form>
        <h2>Your rainbow</h2>
        <Grid array={this.state}/>
      </div>


    );
  }
}

export default App;
