/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { Component } from 'react';
import axios from 'axios';

import SidebarSchedule from './components/SidebarSchedule';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      view: 'main',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // fetch schedule data
    axios.get('http://localhost:3002/espn/schedules', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        const data = res.data;
        this.setState({
          schedule: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick() {
    const { view } = this.state;
    this.setState({
      view: 'schedule',
    });
  }

  renderView() {
    const { schedule, view } = this.state;
    if (view === 'main') {
      return (
        <div id="SidebarSchedule">
          <SidebarSchedule
            ramsSchedule={schedule}
            handleClick={this.handleClick}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
