import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAnnouncement } from '../data/announcementsActions';

export const AnnouncementChangeFrom = ({title, description, id, modeSwitcher}) => {
  const dispatch = useDispatch();

  const [alert, setAlert] = useState('');

  const [announcement, setAnnouncemetn] = useState({title, description, id});
  function inputHandler(event) {
    setAnnouncemetn({
      ...announcement,
      [event.target.name]: event.target.value
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    if (announcement.title.trim() && announcement.description.trim()) {
      dispatch( updateAnnouncement(announcement) );
      modeSwitcher();
    } else {
      setAlert("Field can't be empty!");
    }
  }

  return (
    <>
    { 
      alert 
      ? 
        <div className="alert alert-warning mt-2" role="alert">
          {alert}
        </div>
      : 
        null
    }
    <form className="mt-2" onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input 
          id="title" 
          type="text" 
          name="title" 
          onChange={inputHandler} 
          value={announcement.title}
          className="form-control"  
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea 
          name="description" 
          onChange={inputHandler} 
          value={announcement.description}
          id="description"
          className="form-control"
          rows="10"
        >
        </textarea>
      </div>
      <div className="form-group"><button className="btn btn-success btn-sm" type="submit">SAVE</button></div>
      
    </form>
    </>
  )
}