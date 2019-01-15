/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};


const SidebarSchedule = ({ ramsSchedule }) => (
  <div className="col-sm">
    <p className="h5 text-dark font-weight-bold">REGULAR SEASON</p>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col" />
          <th scope="col" />
          <th scope="col" />
          <th scope="col" />
        </tr>
      </thead>

      <tbody>


        {ramsSchedule.map(schedule => (

          <tr key={schedule.id}>
            <td>
              <img src={`${schedule.opponentlogo}`} className="rounded-circle" width={20} height={20} style={style.image} />
              {schedule.vs}
            </td>
            <td>{schedule.opponent}</td>
            <td>{schedule.wl}</td>
            <td><p>{schedule.result}</p></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SidebarSchedule;
