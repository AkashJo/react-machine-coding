import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <span className='app-heading'>Taskify</span>
      <TodoForm/> 
    </div>
  );
}

export default App;
