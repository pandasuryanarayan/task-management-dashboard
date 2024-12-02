// src/TaskSearch.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/taskSlice';

const TaskSearch = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQueryState] = useState('');

  const handleSearchChange = (e) => {
    setSearchQueryState(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <label>Search Tasks: </label>
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
    </div>
  );
};

export default TaskSearch;