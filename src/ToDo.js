import React, { Component } from "react";
import "./css/ToDo.css";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handelDone = this.handelDone.bind(this);
    this.handelEdit = this.handelEdit.bind(this);
  }

  handleDelete(event) {
    this.props.delete(this.props.id);
  }

  handelDone(event) {
    this.props.done(this.props.id);
  }

  handelEdit(event) {
    this.props.edit(this.props.id);
  }

  render() {
    return (
      <div className="ToDo">
        {this.props.isDone ? (
          <h2 className="ToDo-finished">{this.props.todo}</h2>
        ) : (
          <h2 className="ToDo-notFinished">{this.props.todo}</h2>
        )}
        <div className="ToDo-btns">
          <button className="ToDo-edit ToDo-btn" onClick={this.handelEdit}>
            Edit
          </button>
          <button className="ToDo-delete ToDo-btn" onClick={this.handleDelete}>
            Delete
          </button>
          <button className="ToDo-done ToDo-btn" onClick={this.handelDone}>
            Done
          </button>
        </div>
      </div>
    );
  }
}
