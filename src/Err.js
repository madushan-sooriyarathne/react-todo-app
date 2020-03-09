import React, { Component } from "react";
import img404 from "./img/box.svg";
import "./css/Err.css";

export default class Err extends Component {
  static defaultProps = {
    status: 404
  };

  render() {
    return (
      <div className="Err">
        <img className="Err-img" src={img404} alt={this.props.status}></img>
        <p className="Err-msg">Sorry! you don't have any TODOs yet.</p>
      </div>
    );
  }
}
