import React, { Component } from 'react';
import glamorous from 'glamorous';

const FloatingInputGroup = glamorous.div({
  width: '100%',
  position: 'relative',
});

const Input = glamorous.input({
  color: '#fff',
  backgroundColor: 'transparent',
  width: '100%',
  marginTop: '0.5rem',
  marginBottom: '2rem',
  outline: 0,
  border: 0,
  borderBottom: '1px solid #fff',
  fontSize: '14px',
  ':focus ~ label': {
    transition: '0.2s ease all',
    top: '-25px',
    fontSize: '12px',
    color: '#fff',
  },
  ':valid ~ label': {
    transition: '0.2s ease all',
    top: '-25px',
    fontSize: '12px',
    color: '#fff',
  },
});

const Label = glamorous.label({
  position: 'absolute',
  left: '0px',
  top: '0',
  color: '#fff',
  pointerEvents: 'none',
  transition: '0.2s ease all',
  ':focus': {
    outline: 0,
  },
});

export default class FloatingInput extends Component {
  render() {
    const { className, label, ...other } = this.props;

    return (
      <FloatingInputGroup>
        <Input {...other} />
        <Label>{label}</Label>
      </FloatingInputGroup>
    );
  }
}
