import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ROOT } from '../rootUrl';

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
    <ul className="list-group announcements-list mt-5">
      {
        sameAnnouncemetsList.length 
        ?
        sameAnnouncemetsList.map(announcement => {
          return (
            <li className="list-group-item list-group-item-action" key={announcement.id}>
              <NavLink to={`${ROOT}announcement/${announcement.id}`}>{announcement.title}</NavLink>
            </li>)
          }) 
        :             
          null
      }
    </ul>
  )
}