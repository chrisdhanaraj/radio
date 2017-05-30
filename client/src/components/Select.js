import React, { Component } from 'react';
import glamorous from 'glamorous';

const SelectLabel = glamorous.label({
  display: 'block',
  marginBottom: '1rem',
});

const SelectGroupContainer = glamorous.div({
  display: 'inline-flex',
  position: 'relative',
});

const SelectEl = glamorous.select({
  minWidth: '50px',
  appearance: 'none',
  background: 'transparent',
  border: '1px solid #fff',
  borderRadius: 0,
  padding: '0.5rem 1rem 0.5rem 0.5rem',
  color: '#fff',
});

const SelectSvg = glamorous.svg({
  height: '8px',
  position: 'absolute',
  fill: '#fff',
  transform: 'rotate(90deg)',
  right: '8px',
  top: '12px',
});

export default class Select extends Component {
  render() {
    const { children, label, style, ...other } = this.props;

    return (
      <div style={style}>
        <SelectLabel>{label}</SelectLabel>

        <SelectGroupContainer>
          <SelectEl {...other}>
            {children}
          </SelectEl>

          <SelectSvg width="8px" height="14px" viewBox="0 0 8 14" version="1.1">
            <g id="Icons" stroke="none" strokeWidth="1" fillRule="evenodd">
              <g id="chevron--right" fillRule="nonzero">
                <polygon
                  id="Path-4"
                  points="5.26635341 6.99967225 0.00305032954 12.6293735 1.4640063 13.995246 8.00367387 7.00032775 1.4643333 -0.000959251373 0.00272333007 1.36421338"
                />
              </g>
            </g>
          </SelectSvg>
        </SelectGroupContainer>
      </div>
    );
  }
}
