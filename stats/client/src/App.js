/* eslint-disable import/extensions */
import React, { Component } from 'react';
import $ from 'jquery';
import MainComponent from './components/MainComponent.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: [],
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3004/stats',
      mode: 'no-cors',
      headers: {
        "Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json',
      },
      error: (err) => {
        console.log(err, 'err');
      },
      success: (data) => {
        this.setState({
          sample: data,
        });
      },
    });
  }


  render() {
    const { sample } = this.state;
    return (
      <div>
        <MainComponent sample={sample} />
      </div>
    );
  }
}

export default App;
