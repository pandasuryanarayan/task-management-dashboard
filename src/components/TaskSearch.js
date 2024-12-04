// src/components/TaskSearch.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/taskSlice';
import { TextField, Box } from '@mui/material';

const TaskSearch = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <Box sx={{ mb: 3, width: '100%' }}>
      <TextField
        label="Search tasks by title"
        onChange={handleSearchChange}
        fullWidth
        variant="outlined"
        sx={{
          maxWidth: '95%', // Ensures the input takes the full width of its container
          '& .MuiOutlinedInput-root': {
            borderRadius: 1.5, // Optionally, you can add rounded corners to the search bar
          }
        }}
      />
    </Box>
  );
};

export default TaskSearch;

