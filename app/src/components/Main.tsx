import React from 'react';
import {Link} from "react-router-dom";

const Main = () => {
  return (
    <div className="Main">
      <h1>Welcome to the data generator</h1>
      <div>Select the data type:</div>
      <ul>
        <li>
          <Link to="/person">Personal information</Link>
        </li>
        <li>
          <Link to="/time">Date/Time</Link>
        </li>
      </ul>
    </div>
  );
}

export default Main;
