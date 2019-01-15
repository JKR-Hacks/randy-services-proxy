/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};


const SidebarSchedule = ({ ramsSchedule }) => (
  <div className="container-fluid">

    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h4 className="text-white">Collapsed content</h4>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </div>


    <div className="row justify-content-start">
      <div className="col-4">
        <h4>Regular Season</h4>
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
    </div>

  </div>
);

export default SidebarSchedule;
