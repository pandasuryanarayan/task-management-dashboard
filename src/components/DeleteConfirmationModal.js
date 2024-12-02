// src/DeleteConfirmationModal.js
import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

const DeleteConfirmationModal = ({ isOpen, onRequestClose, taskId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
    onRequestClose(); // Close the modal after deletion
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmation Modal"
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
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this task?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default DeleteConfirmationModal;