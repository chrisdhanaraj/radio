import React, { Component } from 'react';
import glamorous from 'glamorous';

const { Div } = glamorous;

const Label = glamorous.label({
  display: 'block',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
});

const InputEl = glamorous.input({
  backgroundColor: 'transparent',
  border: 0,
  borderBottom: '1px solid #fff',
  color: '#fff',
  '&[readOnly]': {
    borderBottom: 0,
  },
});

const TextAreaEl = glamorous.textarea({
  backgroundColor: 'transparent',
  border: 0,
  borderBottom: '1px solid #fff',
  color: '#fff',
  width: '100%',
  '&[readOnly]': {
    borderBottom: 0,
  },
});

export class Input extends Component {
  render() {
    const { label, ...other } = this.props;

    return (
      <Div marginBottom="1rem">
        <Label>{label}</Label>
        <InputEl {...other} />
      </Div>
    );
  }
}

export class TextArea extends Component {
  render() {
    const { label, ...other } = this.props;

    return (
      <Div marginBottom="1rem">
        <Label>{label}</Label>
        <TextAreaEl {...other} />
      </Div>
    );
  }
}
