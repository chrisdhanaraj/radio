import React from 'react';

const InlineTextField = (props) => {
  const content = props.editing
    ? <input type="text" defaultValue={props.value} />
    : <p className="inline-text-field inline-text-field--type">{props.value}</p>;

  return content;
};

InlineTextField.propTypes = {
  editing: React.PropTypes.bool,
  value: React.PropTypes.string,
};

export default InlineTextField;
