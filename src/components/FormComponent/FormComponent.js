import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "../Input";
import Button from "../Button";
import OutputPlace from "../OutputPlace";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 1000px;
  background-color: ${props => props.backgroundColor};
  padding: 20px 10px;

  .input-block {
    padding: 10px;
    display: flex;
    width: 500px;
    flex-direction: column;
    background-color: #7746D7;
  }
`;

const Title = styled.h1`
  padding: 10px 0;
  font-size: 30px;
  color: gray;
`;

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastName: "",
      fatherName: "",
      age: "",
    }
  }

  onInputChange = (field, event) => {
    const stateObj = {};
    stateObj[field] = event.target.value;

    this.setState(stateObj);
  }

  onButtonClick = () => {
    console.log(`${this.state.name} ${this.state.lastName} ${this.state.fatherName} ${this.state.age} `)
  }

  render() {
    return (
      <FormWrapper backgroundColor={this.props.color}>
        <Title>{this.props.title}</Title>
        <div className="input-block">
          <Input
            value={this.state.lastName}
            onChange={(event) => {this.onInputChange("lastName", event)}}
            label="Фамилия"
            placeholder="Пушкин"
          />
          <Input
            value={this.state.name}
            onChange={(event) => {this.onInputChange("name", event)}}
            label="Имя"
            placeholder="Александр"
          />
          <Input
            value={this.state.fatherName}
            onChange={(event) => {this.onInputChange("fatherName", event)}}
            label="Отчество"
            placeholder="Сергеевич"
          />
          <Input
            value={this.state.age}
            onChange={(event) => {this.onInputChange("age", event)}}
            label="Возраст"
            placeholder="52"
          />
          <Button
            text="Подсчитать"
            onClick={this.onButtonClick}
          />
        </div>
        <OutputPlace
          name={this.state.name}
          lastName={this.state.lastName}
          fatherName={this.state.fatherName}
          age={this.state.age}
        />
      </FormWrapper>
    );
  }
}

FormComponent.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default FormComponent;
