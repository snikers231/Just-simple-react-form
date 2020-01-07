import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const InputStyles = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 23px;

  p {
    margin: 0;
    color: darkgray;
  }

  input{
    width: 250px;
    height: 40px;
    border: 1px solid gray;
    font-size: 20px;
    padding: 0 10px;
  }
`;

export default class Input extends Component {
  render() {
    return (
      <InputStyles>
        <p>
          {this.props.label}
        </p>
        <input {...this.props} />
      </InputStyles>
    )
  }
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};