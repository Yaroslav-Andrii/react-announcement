import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const SameAnnouncements = ({ title, parentId, sameListLength = 3 }) => {
  const sameAnnouncemetsList = useSelector( ({ announcementState: {announcements} }) => {
    return announcements.filter(item => {
      if (item.id !== parentId) {
        const replaceRegExp = /[!?.,-/+{}()]/g

        const wordSetX = item.title.replace(replaceRegExp, '').split(' ').filter(item => item !== "");
        const wordSetY = title.replace(replaceRegExp, '').split(' ').filter(item => item !== "");

        return wordSetX.some(item => wordSetY.includes(item));
      } 
      return false;
    })
  })

  if (sameAnnouncemetsList.length > sameListLength) {
    sameAnnouncemetsList.length = sameListLength;
  }
  
  return (
    <ul>
      {
        sameAnnouncemetsList.length 
        ?
        sameAnnouncemetsList.map(announcement => {
          return (
            <li key={announcement.id}>
              <NavLink to={`/announcement/${announcement.id}`}>{announcement.title}</NavLink>
            </li>)
          }) 
        :             
          null
      }
    </ul>
  )
}