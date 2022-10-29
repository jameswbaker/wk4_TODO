// TodoList.js: renders a list of todos

import React from "react";
import Todo from "./Todo";

import './TodoList.css'

function TodoList({ todos, removeTodo, toggleComplete }) {
    return (
        <div className="todoList">
            <ul style={{ listStyle: 'none' }}>
            {todos.map(todo => (
                <Todo 
                    todo={todo} 
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete} />
            ))}
            </ul>
        </div>
    );
}

export default TodoList;