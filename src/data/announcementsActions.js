import { ADD, DELETE, UPDATE } from "./types"

export const addAnnouncement = announcement => {

  const newAnnouncement = {
    id: Date.now(),
    title: announcement.title,
    description: announcement.description,
    date: new Date().toLocaleDateString(),
  }

  localStorage.setItem(newAnnouncement.id, JSON.stringify(newAnnouncement));

  return {
    type: ADD,
    payload: newAnnouncement,
  }
}

export const deleteAnnouncement = announcementId => {
  localStorage.removeItem(announcementId);

  return {
    type: DELETE,
    payload: announcementId
  }
}

export const updateAnnouncement = updatedAnnouncement => {
  updatedAnnouncement.date = new Date().toLocaleDateString();
  localStorage.setItem(updatedAnnouncement.id, JSON.stringify(updatedAnnouncement));

  return {
    type: UPDATE,
    payload: updatedAnnouncement,
  }
}