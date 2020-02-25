import React, { Component } from 'react';

export default class DinnerVote extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      votes: 0
    }

    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
  }

  add() {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  substract() {
    this.setState({
      votes: this.state.votes - 1
    })
  }

  render() {
    var dinnerVoteStyle ={
      display: "inline-block",
      textAlign: "center",
      margin: 20,
      height: 550,
      width: 420,
      padding: 0,
      backgroundColor: "FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    }

    var foodStyle ={
      height: 300,
      width: 400,
      marginTop: 20
    }

    return (
      <div style={dinnerVoteStyle}>
        <img src={this.props.img} alt="food image" style={foodStyle} />
        <h1>Dinner Time</h1>
        <p>Vote Here IF You Want This</p>
        <button onClick={this.add}>+1</button>
        <p>Vote Here If You Do Not Want This</p>
        <button onClick={this.substract}>-1</button>
        <p>Total: {this.state.votes}</p>
      </div>
    );
  }
}