import React from 'react';

export const SearchForm = ({filter}) => {
  return (
    <form>
      <input onChange={e => filter(e.target.value)} type="text" placeholder="find announcment"/>
    </form>
  );
}