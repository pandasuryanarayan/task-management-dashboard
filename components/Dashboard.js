// src/components/Dashboard.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskSearch from './TaskSearch';
import TaskFilter from './TaskFilter';
import TaskForm from './TaskForm';
import TaskGrid from './TaskGrid';
import { addTask } from '../redux/taskSlice';
import { Modal, Button, Box } from '@mui/material';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddTask = (task) => {
    dispatch(addTask(task)); // Dispatch task to the Redux store
    handleClose(); // Close the modal after saving the task
  };

  return (
    <div className="dashboard">
      {/* Search and Filter components in one line */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TaskSearch />
        <TaskFilter />
      </Box>

      {/* Button container with Add Task button */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{
            position: tasks.length > 0 ? 'initial' : 'relative', // Avoid absolute positioning for first task
            marginLeft: tasks.length === 0 ? '0' : 'auto',
          }}
        >
          Add Task
        </Button>
      </Box>

      {/* Grid displaying tasks */}
      <TaskGrid />

      {/* Add Task Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-task-modal"
        aria-describedby="add-task-form"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            width: 400,
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          {/* Pass both onSave and onCancel */}
          <TaskForm onSave={handleAddTask} onCancel={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;