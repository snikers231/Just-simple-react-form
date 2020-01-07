import React, { Component } from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";

const OutputPlaceWrapper = styled.div`
  width: 500px;
  height: 500px;
  border: darkcyan dashed 2px;
  padding: 20px;
  text-align: left;
`;

export default class OutputPlace extends Component {
  declension = (number, firstDecl, secDecl, thirdDecl) => {
    const declNumber = parseInt(number, 10) % 10;

    if (declNumber === 1) {
      return firstDecl;
    }
    if (declNumber > 1 && declNumber < 5) {
      return secDecl;
    }
    if (declNumber >= 5 || declNumber === 0) {
      return thirdDecl;
    }

    return "";
  };

  render() {
    return (
      <OutputPlaceWrapper>
        {this.props.name && this.props.fatherName && this.props.lastName &&
        (`Меня зовут
          ${this.props.lastName}
          ${this.props.name}
          ${this.props.fatherName}.
        `)}
          {this.props.age && `Мне ${this.props.age}
          ${this.declension(this.props.age, "год", "года", "лет")}`}
      </OutputPlaceWrapper>
    )
  }
}

OutputPlace.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  fatherName: PropTypes.string,
  age: PropTypes.string,
};

