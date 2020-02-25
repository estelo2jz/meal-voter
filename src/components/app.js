import React, { Component } from 'react';

import DinnerVote from './meal';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <DinnerVote img="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <DinnerVote img="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=650&w=500" />
      <DinnerVote img="https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=250" />
      <DinnerVote img="https://images.pexels.com/photos/1233258/pexels-photo-1233258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
    );
  }
}