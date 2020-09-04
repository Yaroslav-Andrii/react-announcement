import React from 'react';

export const Confirm = ({message, callback}) => {

  function clickHandler(event) {
    event.target.name === "true" ? callback(true) : callback(false);
  }

  return (
    <>
    <div className="alert alert-danger mt-2" role="alert">{message}</div>

    <div className="btn-group float-right btn-group-sm" role="group" aria-label="Basic example">
      <button className="btn btn-danger" onClick={clickHandler} name="true">Yes</button>
      <button className="btn btn-secondary" onClick={clickHandler} name="false">No</button>
    </div>
    <div className="clearfix"></div>
    </>
  )
}