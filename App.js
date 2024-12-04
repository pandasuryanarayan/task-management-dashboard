// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Sidebar />
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;

