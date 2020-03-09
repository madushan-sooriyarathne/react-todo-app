import React, { Component } from "react";
import "./css/ToDo.css";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(event) {
    this.props.delete(this.props.id);
  }

  handleDone(event) {
    this.props.done(this.props.id);
  }

  handleEdit(event) {
    this.props.edit(this.props.id);
  }

  render() {
    return (
      <div className="ToDo">
        <h2 className={this.props.isDone ? "ToDo-finished" : "ToDo-notFinished"}>
          {this.props.todo}
        </h2>
        <div className="ToDo-btns">
          <button className="ToDo-edit ToDo-btn" onClick={this.handleEdit}>
            Edit
          </button>
          <button className="ToDo-delete ToDo-btn" onClick={this.handleDelete}>
            Delete
          </button>
          <button className="ToDo-done ToDo-btn" onClick={this.handleDone}>
            {this.props.isDone ? "Undo" : "Done"}
          </button>
        </div>
      </div>
    );
  }
}
