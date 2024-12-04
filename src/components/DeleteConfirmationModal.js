// src/components/DeleteConfirmationModal.js
import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { Button, Typography, Box } from '@mui/material';

const DeleteConfirmationModal = ({ isOpen, onRequestClose, taskId}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
    onRequestClose(); // Close the modal after deletion
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
          width: '400px',
        },
      }}
    >
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Confirm Deletion
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Are you sure you want to delete this task? This action cannot be undone.
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Yes, Delete
          </Button>
          <Button variant="outlined" onClick={onRequestClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmationModal;
