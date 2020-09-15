import React, { Component } from "react";
import styled from "styled-components";

const ToDoForm = styled.form`
  margin: 20px 0px;
`;

const AddButton = styled.button`
  background-color: #333333;
  color: #ffffff;
  padding: 10px 32px;
  text-decoration: none;
`;

const Input = styled.input`
  width: 500px;
  font-size: 1.5rem;
  padding: 10px;
  margin-right: 20px;
`;

export default class ExhibitionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibits: [],
      currentExhibit: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentExhibit: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addExhibit = (e) => {
    e.preventDefault();
    const newExhibit = this.state.currentExhibit;
    console.log(newExhibit);
    if (newExhibit.text !== "") {
      const newExhibits = [...this.state.exhibits, newExhibit];
      this.setState({
        exhibits: newExhibits,
        currentExhibit: {
          text: "",
          key: "",
        },
      });
    }
  };

  render() {
    return (
      <header>
        <ToDoForm onSubmit={this.addExhibit}>
          <Input
            type="text"
            placeholder="Enter Text"
            value={this.state.currentExhibit.text}
            onChange={this.handleInput}
          ></Input>
          <AddButton type="submit">Add Exhibit</AddButton>
        </ToDoForm>
      </header>
    );
  }
}
