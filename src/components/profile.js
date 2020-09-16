import React, { Component } from "react";
import { data } from "../data.js";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    const { firstName, lastName, phone, email, bio, avatarImage } = data.profile;
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
          <img className="avatar" src={avatarImage}></img>
          <ul>
            <li>
              <p>First Name:</p>
              <span>{firstName}</span>
            </li>
            <li>
              <p>Last Name:</p>
              <span>{lastName}</span>
            </li>
            <li>
              <p>Phone:</p>
              <span>{phone}</span>
            </li>
            <li>
              <p>Email:</p>
              <span>{email}</span>
            </li>
            <li>
              <p>Bio:</p>
              <span>{bio}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
