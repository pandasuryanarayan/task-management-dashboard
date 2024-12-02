// src/TaskFilter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/taskSlice';

const TaskFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>Filter Tasks: </label>
      <select onChange={handleFilterChange}>
        <option value="ALL">All Tasks</option>
        <option value="COMPLETED">Completed Tasks</option>
        <option value="PENDING">Pending Tasks</option>
        <option value="OVERDUE">Overdue Tasks</option>
      </select>
    </div>
  );
};

export default TaskFilter;