import React from 'react';
import PropTypes from 'prop-types';

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default function ErrorMessage({ message }) {
  return <div className="has-error">{message}</div>;
}
