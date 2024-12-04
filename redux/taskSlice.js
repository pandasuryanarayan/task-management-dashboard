// src/redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: 'ALL',
    searchQuery: '',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.tasks[index] = updatedTask; // Update the task in the array
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    markTaskCompleted: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].completed = !state.tasks[index].completed; // Toggle completed status
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    reorderTasks: (state, action) => {
      state.tasks = action.payload; // Update tasks with the new order
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  markTaskCompleted,
  setFilter,
  setSearchQuery,
  reorderTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
