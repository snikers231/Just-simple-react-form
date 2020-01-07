import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonStyles = styled.a`
  width: 150px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: ${props => props.disabled ? "gray" : "#399200"};
  color: ${props => props.disabled ? "white" : "#A0F06C"};
  border-radius: 25px;

  &:hover {
    background-color: ${props => props.disabled ? "darkgray" : "#5CA82A"};
    color: ${props => props.disabled ? "white" : "#A0F06C"};
  }
`;

export default class Button extends Component {
  handleChange = () => {
    if (this.props.onClick && !this.props.disabled) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <ButtonStyles
        disabled={this.props.disabled}
        onClick={this.handleChange}
      >
        {this.props.text}
      </ButtonStyles>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
