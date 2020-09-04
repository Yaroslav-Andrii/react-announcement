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
    if (announcement.title && announcement.description) {
      dispatch( updateAnnouncement(announcement) );
      modeSwitcher();
    } else {
      setAlert("Field can't be empty");
    }
  }

  return (
    <>
    {alert ? <h4>{alert}</h4> : null}
    <form onSubmit={submitHandler}>
      <input type="text" name="title" onChange={inputHandler} value={announcement.title}/>
      <textarea name="description" onChange={inputHandler} value={announcement.description}></textarea>

      <button type="submit">Save</button>
    </form>
    </>
  )
}