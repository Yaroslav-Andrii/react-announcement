import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnnouncementChangeFrom } from './AnnouncementChangeFrom';
import { Redirect } from 'react-router-dom';
import { deleteAnnouncement } from '../data/announcementsActions';
import { SameAnnouncements } from './SameAnnouncements';
import { Confirm } from './Confirm';

export const Announcement = ({ match }) => {
  const dispatch = useDispatch();
  const { title, description, date, id } = useSelector( ({ announcementState: {announcements} }) => {
    const announcement = announcements.find(announcement => announcement.id === +match.params.id);
    return announcement || {title: '', description: '', date: '', id: ''};
  } )

  const [redirectState, setRedirectState] = useState(false);
  const [changeMode, switchModeState] = useModeState();

  const [isConfirm, setConfirm] = useState(false);

  function deleteAnnouncementHandler() {
    setConfirm(true);
  }

  function deleteAnnouncementCallback(response) {
    if (response) {
      setRedirectState(true);
      dispatch( deleteAnnouncement(id) );
    } else {
      setConfirm(false);
    }
  }

  return (
    <>
    
    {isConfirm && <Confirm message="Do you really want to delete the announcement" callback={deleteAnnouncementCallback}/>}
    {redirectState && <Redirect to="/"/>}
    {
      changeMode 
      ? 
        <AnnouncementChangeFrom 
          modeSwitcher={switchModeState} 
          title={title} 
          description={description} 
          id={id}
        />
      :
        <>
        <h3>{title}</h3>
        <div>
          <p>{description}</p>
        </div>
        <span>{date}</span>
        <button onClick={switchModeState}>Update</button>
        </>
    }
    <button onClick={deleteAnnouncementHandler}>Delete Announcement</button>
    <SameAnnouncements title={title} parentId={id}/>
    </>
  );
}

function useModeState() {
  const [changeMode, setChangeMode] = useState(false);
  function changeModeSwitcher() {
    setChangeMode(state => !state);
  }

  return [changeMode, changeModeSwitcher]
}