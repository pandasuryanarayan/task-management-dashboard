// src/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import Task from './Task';
import { reorderTasks } from '../redux/taskSlice';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = {
  TASK: 'task',
};

const DraggableTask = ({ task, index, moveTask }) => {
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
    <div ref={(node) => ref(drop(node))}>
      <Task task={task} />
    </div>
  );
};

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);
  const searchQuery = useSelector(state => state.tasks.searchQuery);

  const filteredTasks = () => {
    const currentDate = new Date();
    return tasks
      .filter(task => {
        if (filter === 'ALL') return true;
        if (filter === 'COMPLETED') return task.completed;
        if (filter === 'PENDING') return !task.completed;
        if (filter === 'OVERDUE') return new Date(task.dueDate) < currentDate;
        return true;
      })
      .filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const moveTask = (fromIndex, toIndex) => {
    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(fromIndex, 1);
    reorderedTasks.splice(toIndex, 0, removed);
    dispatch(reorderTasks(reorderedTasks));
  };

  const filteredTaskList = filteredTasks();

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ maxHeight: '350px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {filteredTaskList.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
            <p>No Tasks available</p>
          </div>
        ) : (
          filteredTaskList.map((task, index) => (
            <DraggableTask key={task.id} index={index} task={task} moveTask={moveTask} />
          ))
        )}
      </div>
    </DndProvider>
  );
};

export default TaskList;