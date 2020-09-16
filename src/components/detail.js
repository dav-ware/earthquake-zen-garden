import React, { Component } from "react";
import { data } from "../data.js";
import { Link } from "react-router-dom";

class Detail extends Component {
  buildDetail() {
    const index = this.props.location.state.index;
    const { place, mag, time, status, tsunami, type } = data.data.features[index].properties;
    const date = new Date(time).toISOString();
    return (
      <div className="container">
        <h2>{place}</h2>
        <ul>
          <li>
            <p>Place:</p>
            <span>{place}</span>
          </li>
          <li>
            <p>Magnitude:</p>
            <span>{mag}</span>
          </li>
          <li>
            <p>Time:</p>
            <span>{date}</span>
          </li>
          <li>
            <p>Status:</p>
            <span>{status}</span>
          </li>
          <li>
            <p>Tsunami:</p>
            <span>{tsunami}</span>
          </li>
          <li>
            <p>Type:</p>
            <span>{type}</span>
          </li>
        </ul>
      </div>
    );
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
        {this.buildDetail()}
      </div>
    );
  }
}

export default Detail;
