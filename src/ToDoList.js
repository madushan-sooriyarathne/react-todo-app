import React, { Component } from "react";
import StorageHandler from "./StorageHandler";
import ToDo from "./ToDo";
import Form from "./Form";
import Err from "./Err";
import EditForm from "./EditForm";

import "./css/ToDoList.css";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.storageObj = new StorageHandler();
    this.state = {
      todoList: this.storageObj.getItems()
    };
    this.delete = this.delete.bind(this);
    this.submit = this.submit.bind(this);
    this.done = this.done.bind(this);
    this.edit = this.edit.bind(this);
    this.editSubmit = this.editSubmit.bind(this);
  }

  // Todo Methods
  async delete(id) {
    await this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    });

    // delete from local storage
    this.storageObj.setStorage(this.state.todoList);
  }

  done(id) {
    this.setState(st => {
      st.todoList = st.todoList.map(todo => {
        if (id === todo.id) {
          todo.isDone = true;
        }
        return todo;
      });
      this.storageObj.setStorage(st.todoList);
      return st;
    });
  }

  edit(id) {
    this.setState(st => {
      st.todoList = st.todoList.map(todo => {
        if (todo.id === id) {
          todo.isEditing = true;
          todo.isDone = false;
        }
        return todo;
      });
      this.storageObj.setStorage(st.todoList);
      return st;
    });
  }

  // Form Methods
  async submit(todo) {
    await this.setState({ todoList: [...this.state.todoList, todo] });
    this.storageObj.setStorage(this.state.todoList);
  }

  editSubmit(editedTodo, id) {
    this.setState(st => {
      st.todoList = st.todoList.map(todo => {
        if (todo.id === id) {
          todo.todo = editedTodo;
          todo.isEditing = false;
        }
        return todo;
      });
      this.storageObj.setStorage(st.todoList);
      return st;
    });
  }

  render() {
    return (
      <div className="ToDoList">
        <h1 className="ToDoList-heading">ToDo List.</h1>
        {this.state.todoList.length < 1 ? (
          <Err status={404} />
        ) : (
          <div className="ToDoList-todos">
            {this.state.todoList.map(todo => {
              return todo.isEditing ? (
                <EditForm
                  todoName={todo.todo}
                  key={todo.id}
                  id={todo.id}
                  submit={this.editSubmit}
                />
              ) : (
                <ToDo
                  key={todo.id}
                  id={todo.id}
                  todo={todo.todo}
                  delete={this.delete}
                  done={this.done}
                  isDone={todo.isDone}
                  edit={this.edit}
                />
              );
            })}
          </div>
        )}
        <Form submit={this.submit} />
      </div>
    );
  }
}
