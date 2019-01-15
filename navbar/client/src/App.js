/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';

import Navigation from './components/Navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      view: 'main',
    };
    this.renderView = this.renderView.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3007/espn/teamstandings', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const data = res.data;
        this.setState({
          teams: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // eslint-disable-next-line consistent-return
  renderView() {
    const { view, teams } = this.state;
    if (view === 'main') {
      return (
        <div>
          <Navigation teams={teams} />
        </div>
      );
    }
  }

  render() {
    return (
      this.renderView()
    );
  }
}
