import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const todoItem = {
        id: new Date().getTime(),
        content: newTodo,
        completed: false,
      };
      setTodoList([...todoList, todoItem]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const deleteTodo = (id, e) => {
    e.stopPropagation();
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span
              onClick={() => toggleTodo(todo.id)}
              className="todo-content"
            >
              {todo.content}
            </span>
            <button
              className={`delete-button ${todo.completed ? 'hide' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id, e);
              }}
            >
              <span className="delete-button-text">Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
