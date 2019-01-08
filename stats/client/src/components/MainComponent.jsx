import React from 'react';

const MainComponent = ({ sample }) => (

  <div id="container" className="col-lg-3 alert alert-light container">
    <p className="text-dark font-weight-bold text-left">Team Stats</p>
    <div className="row">

      <div id="lefttop" className="col-sm border-right border-bottom border-secondary text-center">
        <p id="headingComp">Passing:</p>
        <br />
        <p className="h4 text-dark font-weight-bold">{sample.reduce((elem, i) => elem + i.Offense.Passing, 0) / sample.length}</p>
      </div>

      <div id="righttop" className="col-sm border-bottom border-secondary text-center">
        <p id="headingComp">Rushing:</p>
        <br />
        <p className="h4 text-dark font-weight-bold">{sample.reduce((elem, i) => elem + i.Offense.Rushing, 0) / sample.length}</p>
      </div>

    </div>

    <div className="row">

      <div id="leftbottom" className="col-sm border-right border-bottom border-secondary text-center">
        <p id="headingComp">Tackles:</p>
        <br />
        <p className="h4 text-dark font-weight-bold">{sample.reduce((elem, i) => elem + i.Defense.Tackles, 0) / sample.length}</p>
      </div>

      <div id="rightbottom" className="col-sm border-bottom border-secondary text-center">
        <p id="headingComp">Interceptions:</p>
        <br />
        <p className="h4 text-dark font-weight-bold">{sample.reduce((elem, i) => elem + i.Defense.Interceptions, 0) / sample.length}</p>
      </div>

    </div>
    <br />
    <a href="http://www.espn.com/nfl/statistics" target="_blank"><p className="text-center">All Team Rankings</p></a>

  </div>

);


export default MainComponent;
