import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import React, { useState } from "react";
import './App.css';

function App() {
  const[todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Box">
          <p>REACT TODO!</p>
          <TodoForm addTodo={addTodo}/>
          <TodoList 
            todos={todos} 
            removeTodo={removeTodo}
            toggleComplete={toggleComplete} 
          />
        </div>
      </header>
    </div>
  );
}

export default App;
