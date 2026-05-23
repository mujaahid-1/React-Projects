import { useState } from "react";

function RenderTodos({ todoList, deleteTodo, handleFinishedTodo }) {
  return (
    <ul className="todos-list">
      {todoList.map((todo) => (
        <li key={todo.id}>
          <div className="space-text-btn">
            <div className="todo-text">
            <input
            type="checkbox"
            value={todo.packed}
            onChange={() => handleFinishedTodo(todo.id)}
          />
          <span
            className={todo.packed ? "completed-todo" : ""}
          >
            {todo.description}
          </span>
          </div>
          <div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default RenderTodos;
