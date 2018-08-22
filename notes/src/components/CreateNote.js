import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCreateClick = event => {
    event.preventDefault();
    this.props.makeNote(event);
    this.props.history.push("/notes");
  };


  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("createProps", this.props);
    return (
      <div className="createNote-container">
        <div className="CreateNote-form">
          <h1>Create a note:</h1>
          <input
            className="title-input"
            type="text"
            onChange={this.handleInput}
            placeholder="Note title"
            name="title"
            value={this.props.title}
          />

          <input
            className="content-input"
            type="text"
            onChange={this.handleInput}
            placeholder="Note content"
            name="content"
            value={this.props.content}
          />

          <button className="save-button" onClick={this.handleCreateClick}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
