import React, { Component } from 'react';

const Validation = ( props ) => {
  let message = null
  if (props.length < 5) {
    message = "Text too short"
  } else {
    message = "Text long enough"
  }

  return (
    <p>{message}</p>
  );
}

export default Validation;
