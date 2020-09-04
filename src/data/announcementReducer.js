import { ADD, DELETE, UPDATE } from "./types";

const handlers = {
  DEFAULT: state => state,
  [ADD]: (state, action) => ({announcements: [...state.announcements, action.payload]}),
  [DELETE]: (state, action) => ({
    announcements: state.announcements.filter(item => item.id !== action.payload)
  }),
  [UPDATE]: (state, action) => ({ 
    announcements: state.announcements.map(item => item.id === action.payload.id ? action.payload : item)
  })
}

const initalState = getInitialState();

export function announcementReducer(state = initalState, action) {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}

function getInitialState() {
  return { announcements: Object.values(localStorage).map(item => JSON.parse(item)) };
}