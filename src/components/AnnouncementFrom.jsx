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

    if (formState.title && formState.description) {
      dispatch( addAnnouncement(formState) );
      setRedirectState(true);
    } else {
      setAlert('Some field is empty! Fill all fields for create announcement');
    }
  }

  return (
    <>
    { redirectState && <Redirect to="/"/> }
    <h3>Create new announcement!</h3>

    { alert ? <p>{alert}</p> : null}
    <form onSubmit={submitHandler}>
      <label>
        Title
        <input 
          onChange={setFormChange} 
          id="title" 
          type="text" 
          value={formState.title}
        />
      </label>
      <label>
        Description
        <textarea 
          onChange={setFormChange} 
          id="description"
          value={formState.description}
        ></textarea>
      </label>
      <button type="submit">Add announcement</button>
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