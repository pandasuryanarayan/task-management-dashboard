// src/components/EditTaskModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/taskSlice';

const EditTaskModal = ({ isOpen, onRequestClose, task }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      title,
      description,
      dueDate,
    };

    // Dispatch the editTask action with the updated task
    dispatch(editTask({ id: task.id, updatedTask }));
    onRequestClose(); // Close the modal after editing
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          padding: 0,
          border: 'none',
          borderRadius: '8px',
          width: '500px',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Edit Task
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
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
            <Button variant="contained" color="primary" type="submit">
              Save Changes
            </Button>
            <Button variant="outlined" onClick={onRequestClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditTaskModal;
