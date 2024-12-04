// src/components/TaskForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && dueDate) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        completed: false,
      };
      if (onSave) onSave(newTask); // Call onSave with the new task
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        required
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 2 }}
      />
      <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          onClick={onCancel} // Call onCancel when Cancel is clicked
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default TaskForm;
