import React, { Component } from "react";
import "./css/EditForm.css";

export default class EditForm extends Component {
  static defaultProps = {
    todoName: ""
  };
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todoName
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.todo, this.props.id);
    this.setState({ todo: "" });
  }

  render() {
    return (
      <div className="EditForm-container">
        <form className="EditForm" onSubmit={this.handleSubmit}>
          <input
            className="EditForm-input"
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="Edit Todo"
            autoComplete="off"
            required={true}
          ></input>
          <button type="submit" className="EditForm-btn">
            Update
          </button>
        </form>
      </div>
    );
  }
}
