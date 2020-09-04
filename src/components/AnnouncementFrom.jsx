import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnnouncement } from '../data/announcementsActions';
import { Redirect } from 'react-router-dom';

export const AnnouncementForm = () => {
  const dispatch = useDispatch();

  const [redirectState, setRedirectState] = useState(false);
  const [formState, setFormChange] = useFormState();
  
  const [alert, setAlert] = useState('');
  
  function submitHandler(event) {
    event.preventDefault();

    if (formState.title.trim() && formState.description.trim()) {
      dispatch( addAnnouncement(formState) );
      setRedirectState(true);
    } else {
      setAlert('Some field is empty! Fill all fields for create announcement');
    }
  }

  return (
    <>
    { redirectState && <Redirect to="/"/> }
    <h3 className="mt-2 mb-4 text-center">Create new announcement!</h3>

    { 
      alert 
      ? 
        <div className="alert alert-warning" role="alert">
          {alert}
        </div>
      : 
        null
    }

    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input 
          className="form-control"
          onChange={setFormChange} 
          id="title" 
          type="text" 
          value={formState.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea 
          className="form-control"
          onChange={setFormChange} 
          id="description"
          value={formState.description}
          rows="10"
        >
        </textarea>
      </div>
      <div className="form-group">
        <button className="btn btn-primary float-right" type="submit">Add announcement</button>
      </div>
    </form>
    </>
  );
}

function useFormState() {
  const initialFormState = {title: '', description: ''};
  const [formState, setFromState] = useState(initialFormState);
  function inputChange(event) {
    setFromState({
      ...formState, 
      [event.target.id]: event.target.value
    });
  }

  return [formState, inputChange];
}