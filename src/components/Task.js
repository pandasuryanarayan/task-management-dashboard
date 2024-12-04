// src/components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/taskSlice';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import EditTaskModal from './EditTaskModal';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleToggleComplete = () => {
    dispatch(toggleComplete(task.id));
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="caption">Due Date: {task.dueDate}</Typography>
        <Box sx={{ mt: 2 }}>
          <Button onClick={handleToggleComplete} variant="outlined" sx={{ mr: 1 }}>
            {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </Button>
          <Button onClick={handleEditClick} variant="contained" color="primary" sx={{ mr: 1 }}>
            Edit
          </Button>
          <Button onClick={handleDeleteClick} variant="contained" color="error">
            Delete
          </Button>
        </Box>
      </CardContent>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        taskId={task.id}
      />
      <EditTaskModal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        task={task}
      />
    </Card>
  );
};

export default Task;
