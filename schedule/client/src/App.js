/* eslint-disable consistent-return */
import React, { Component } from 'react';
import axios from 'axios';

import Schedule from './components/Schedule';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],

      view: 'schedule',
    };
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

  renderView() {
    const { schedule, view } = this.state;
    if (view === 'schedule') {
      return (
        <div id="fullschedule">
          <Schedule
            ramsSchedule={schedule}
          />
        </div>
      );
    }
    // if (view === 'feed') {
    //   return (
    //     <div id="feed">
    //       <Feed
    //         ramsFeed={ramsFeed}
    //       />
    //     </div>
    //   );
    // }
    // if (view === 'sidebarSchedule') {
    //   return (
    //     <div id="sidebarSchedule">
    //       <SidebarSchedule
    //         ramsSchedule={schedule}
    //       />
    //     </div>
    //   );
    // }
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
