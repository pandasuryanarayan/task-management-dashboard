// src/App.js
import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import SearchInput from './components/SearchInput';

const App = () => {
  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <TaskForm />
      <TaskFilter />
      <SearchInput />
      <TaskList />
    </div>
  );
};

export default App;