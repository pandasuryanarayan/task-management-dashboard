// src/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/taskSlice';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import EditTaskModal from './EditTaskModal';

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
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={handleToggleComplete}>
        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>

      {/* Confirmation Modal for Deleting Task */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        taskId={task.id}
      />

      {/* Edit Task Modal */}
      <EditTaskModal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        task={task}
      />
    </div>
  );
};

export default Task;