import React from 'react';

export const SearchForm = ({filter}) => {
  return (
    <form className="mt-3 search-form">
      <div className="form-group">
      <input 
        className="p-2"
        id="serchInput" 
        onChange={e => filter(e.target.value)} 
        type="text" 
        placeholder="What do you search?"
      />
      </div>
    </form>
  );
}