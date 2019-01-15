/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import $ from 'jquery';
import Teamleaders from './components/Teamleaders.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: [],
      photos: [],
      side: 'Offense',
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3003/stats',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
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
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3003/photos',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      dataType: 'json',
      error: (err) => {
        console.log(err, 'err');
      },
      success: (data) => {
        this.setState({
          photos: data,
        });
      },
    });
  }

  changeSide(e) {
    this.setState({
      side: e,
    });
  }

  render() {
    const { sample, photos, side } = this.state;
    return (
      <div>
        <Teamleaders
          sample={sample}
          photos={photos}
          changeSide={this.changeSide.bind(this)}
          side={side}
        />
      </div>
    );
  }
}

export default App;
