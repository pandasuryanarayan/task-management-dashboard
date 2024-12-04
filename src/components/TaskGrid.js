// src/components/TaskGrid.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markTaskCompleted, reorderTasks } from '../redux/taskSlice';
import { Card, CardContent, IconButton, Tooltip, Box, Typography } from '@mui/material';
import { CheckCircleOutline, Undo, Edit, Delete } from '@mui/icons-material';
import EditTaskModal from './EditTaskModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = {
  TASK: 'task',
};

const DraggableTask = ({ task, index, moveTask, onEdit, onDelete, onComplete }) => {
  const [, ref] = useDrag({
    type: ItemType.TASK,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.TASK,
    hover(item) {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index; // Update the index for the dragged item
      }
    },
  });

  return (
    <Card
      ref={(node) => ref(drop(node))}
      sx={{ backgroundColor: task.completed ? '#4CAF50' : '#FFF', p: 2 }}
    >
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary">
          Due: {task.dueDate}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Tooltip title={task.completed ? 'Undo' : 'Mark as Completed'} arrow>
            <IconButton
              color="success"
              size="small"
              onClick={() => onComplete(task.id)}
            >
              {task.completed ? <Undo /> : <CheckCircleOutline />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit" arrow>
            <IconButton
              color="primary"
              size="small"
              onClick={() => onEdit(task)}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <IconButton
              color="error"
              size="small"
              onClick={() => onDelete(task.id)}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

const TaskGrid = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const searchQuery = useSelector((state) => state.tasks.searchQuery);
  const dispatch = useDispatch();

  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleComplete = (id) => {
    dispatch(markTaskCompleted(id));
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleDelete = (id) => {
    setDeleteTaskId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
    setDeleteTaskId(null);
  };

  const moveTask = (fromIndex, toIndex) => {
    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(fromIndex, 1);
    reorderedTasks.splice(toIndex, 0, removed);
    dispatch(reorderTasks(reorderedTasks));
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'ALL') return true;
      if (filter === 'COMPLETED') return task.completed;
      if (filter === 'PENDING') return !task.completed;
      if (filter === 'OVERDUE') {
        const currentDate = new Date();
        return new Date(task.dueDate) < currentDate && !task.completed;
      }
      return true;
    })
    .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
        {filteredTasks.length === 0 ? (
          <Box
            sx={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              mt: 4,
            }}
          >
            <Typography variant="h6" color="text.secondary">
              No tasks available.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add a task by clicking the Add Task button above.
            </Typography>
          </Box>
        ) : (
          filteredTasks.map((task, index) => (
            <DraggableTask
              key={task.id}
              index={index}
              task={task}
              moveTask={moveTask}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onComplete={handleComplete}
            />
          ))
        )}
      </Box>

      {/* Edit Task Modal */}
      {selectedTask && (
        <EditTaskModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          task={selectedTask}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onRequestClose={handleDeleteModalClose}
          taskId={deleteTaskId}
        />
      )}
    </DndProvider>
  );
};

export default TaskGrid;
