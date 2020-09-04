import React from 'react';

export const Confirm = ({message, callback}) => {

  function clickHandler(event) {
    event.target.name === "true" ? callback(true) : callback(false);
  }

  return (
    <>
    <h4>{message}</h4>
    <button onClick={clickHandler} name="true">Yes</button>
    <button onClick={clickHandler} name="false">No</button>
    </>
  )
}