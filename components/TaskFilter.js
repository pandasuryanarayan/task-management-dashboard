// src/components/TaskFilter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/taskSlice';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const TaskFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box sx={{ mb: 3 }}>
      <FormControl fullWidth>
      <InputLabel id="filter-label">Filter Tasks</InputLabel>
        <Select
          labelId="filter-label"
          id="filter-select"
          defaultValue="ALL"
          onChange={handleFilterChange}
          label="Filter Tasks"
        >
          <MenuItem value="ALL">All Tasks</MenuItem>
          <MenuItem value="COMPLETED">Completed Tasks</MenuItem>
          <MenuItem value="PENDING">Pending Tasks</MenuItem>
          <MenuItem value="OVERDUE">Overdue Tasks</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TaskFilter;
