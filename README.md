# Task Management Dashboard

A modern task management dashboard with drag-and-drop functionality, allowing users to manage tasks, mark them as completed, edit, delete, and reorder them. This app utilizes React, Redux, Material-UI, and react-dnd for drag-and-drop functionality.

## Features
- Add, Edit, and Delete tasks.
- Mark tasks as completed or undo completion.
- Filter tasks by status (All, Completed, Pending, Overdue).
- Search tasks by title.
- Rearrange tasks using drag-and-drop functionality.
- Modal dialogs for editing and deleting tasks with confirmation.
  
## Tech Stack
- **Frontend**: React, Redux, Material-UI
- **Drag-and-Drop**: react-dnd
- **State Management**: Redux Toolkit

## Setup & Installation

### Prerequisites
- Node.js (v22.12.0 LTS and above)
- npm (v10.9.1 and above)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pandasuryanarayan/task-management-dashboard.git
   cd task-management-dashboard
   ```

2. **Install dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Run the application**:
   Start the development server by running:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

### Running Tests

To run the tests, use:
```bash
npm test
```

## Project Structure

```
src/
├── public/
│   ├── index.html
│   ├── favicon.ico
├── components/               # React components for the UI
│   ├── TaskGrid.js           # Task list display, with drag-and-drop functionality
│   ├── TaskForm.js           # Form for adding and editing tasks
│   ├── TaskSearch.js         # Search bar for filtering tasks by title
│   ├── TaskFilter.js         # Dropdown to filter tasks by status
│   ├── EditTaskModal.js      # Modal for editing tasks
│   ├── DeleteConfirmationModal.js  # Modal for confirming task deletion
│   ├── Task.js               # To Display Tasks
│   ├── Sidebar.js  # Component to Implement Sidebar
│   ├── Dashboard.js  # Component to Implement Dashboard
├── redux/
│   ├── taskSlice.js          # Redux slice to manage tasks
│   ├── store.js              # Redux store configuration
├── App.js                    # Main App component
├── index.js                  # Entry point for the React app
├── App.css                   # Global styles (if needed)
└── README.md                 # Project documentation (this file)
```

## Usage

1. **Add Task**: Click the "Add Task" button to open the task creation form. Fill in the task details and click "Add Task" to save.
2. **Edit Task**: Click the "Edit" button on any task to modify its details.
3. **Mark as Completed**: Click the "Mark as Completed" button to mark a task as completed. You can undo this action by clicking the "Undo" button.
4. **Delete Task**: Click the "Delete" button to open a confirmation modal and permanently remove the task.
5. **Drag-and-Drop**: Rearrange tasks by dragging and dropping them in the task list.
6. **Filter Tasks**: Use the filter dropdown to view tasks by status (All, Completed, Pending, Overdue).
7. **Search Tasks**: Use the search bar to filter tasks by title.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
