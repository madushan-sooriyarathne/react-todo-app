import React, { Component } from "react";
import { uuid } from "uuidv4";
import "./css/Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      isDone: false,
      isEditing: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit({ ...this.state, id: uuid() });

    //Clear the form
    this.setState({ todo: "", isDone: false, isEditing: false });
  }

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <div>
          <input
            name="todo"
            id="name"
            onChange={this.handleChange}
            value={this.state.todo}
            placeholder="Enter Todo"
            className="Form-input"
            autoComplete="off"
            required={true}
          ></input>
        </div>
        <button type="submit" className="Form-btn">
          Add Todo
        </button>
      </form>
    );
  }
}
