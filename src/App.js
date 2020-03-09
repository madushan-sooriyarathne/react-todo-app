import React, { Component } from "react";
import ToDoList from "./ToDoList";
import "./css/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
        <div className="App-credit">
          <p className="App-credit-info">
            Made with ❤️ by <span className="App-special">Madushan</span> using React JS
          </p>
          <p className="App-credit-links">
            Find Me on{" "}
            <a
              href="https://www.facebook.com/madushan.sooriyarathne"
              className="App-social facebook"
              rel="noopener noopener"
              target="_blank"
            >
              Facebook
            </a>{" "}
            <a
              href="https://www.instagram.com/iam_madushan/"
              className="App-social instagram"
              rel="noopener noopener"
              target="_blank"
            >
              Instagram
            </a>{" "}
            <a
              href="https://github.com/madushan-sooriyarathne"
              className="App-social github"
              rel="noopener noopener"
              target="_blank"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    );
  }
}
