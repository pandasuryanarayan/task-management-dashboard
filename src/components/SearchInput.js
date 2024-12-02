// src/SearchInput.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/taskSlice';

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search tasks by title..."
      onChange={handleSearchChange}
      style={{
        padding: '8px',
        width: '300px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    />
  );
};

export default SearchInput;