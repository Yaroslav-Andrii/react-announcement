import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchForm } from './SearchForm';
import { NavLink } from 'react-router-dom';

export const AnnouncementList = () => {
  const announcements = useSelector(state => state.announcementState.announcements);
  const [announcemetsList, setAnnouncemetsList] = useState(announcements);
  
  const searchHandler = searchString => {
    setAnnouncemetsList(
      announcements.filter(announcement => {
        return ~announcement.title
          .toLowerCase()
          .indexOf(searchString.toLowerCase())
      })
    );
  }

  return (  
    <>
      <SearchForm filter={searchHandler}/>
      <ul>
        {
          announcemetsList.length 
          ?
          announcemetsList.map(announcement => {
              return (
                <li key={announcement.id}>
                  <NavLink to={`/announcement/${announcement.id}`}>{announcement.title}</NavLink>
                </li>)
            }) 
          : 
            "List of announcements is empty"
        }
      </ul>
    </>
  );
}