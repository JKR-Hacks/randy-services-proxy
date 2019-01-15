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
  }

  componentDidMount() {
    // fetch schedule data
    axios.get('http://localhost:3006/espn/schedules', {
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

  renderView() {
    const { schedule, view } = this.state;
    if (view === 'main') {
      return (
        <div id="SidebarSchedule">
          <SidebarSchedule
            ramsSchedule={schedule}
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
