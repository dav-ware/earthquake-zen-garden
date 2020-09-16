import React, { Component } from "react";
import { data } from "../data.js";
import { Link } from "react-router-dom";

class Home extends Component {
  buildTable() {
    return data.data.features.map((feature, i) => {
      const { place, mag, time } = feature.properties;
      const date = new Date(time).toISOString();
      return (
        <tr key={feature['id']}>
          <td>
            <Link
              to={{
                pathname: "/detail",
                state: { index: i }
              }}
            >
              {place}
            </Link>
          </td>
          <td>{mag}</td>
          <td>{date}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <Link to="/">
            <img className="navbar-logo" src={data.site["logoImage"]}></img>
          </Link>
          <span className="navbar-text">Earthquake Zen Garden</span>
          <Link to="/profile" className="nav-link">
            Welcome, Sally
          </Link>
        </nav>
        <div className="container">
          <h2>USGS All Earthquakes, Past Hour</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Place</th>
                <th scope="col">Magnitude</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>{this.buildTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
