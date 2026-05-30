import { useState } from "react";

import RenderTodos from "./components/RenderTodos";
import TodoApp from "./components/TodoApp";
import FinishedTodos from "./components/FinishedTodos";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function newTodos(value) {
    setTodoList((todos) => [...todos, value]);
  }

  function deleteTodo(id) {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleFinishedTodo(id) {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, compeleted: !todo.compeleted } : todo,
      ),
    );
  }

  return (
    <div className="todo-layout">
      <div className="todo">
        <h1>Pending Todos</h1>
        <TodoApp newTodos={newTodos} />
        <RenderTodos
          todoList={todoList}
          deleteTodo={deleteTodo}
          handleFinishedTodo={handleFinishedTodo}
        />
      </div>
      <div className="todo">
        <FinishedTodos
          todoList={todoList}
          deleteTodo={deleteTodo}
          handleFinishedTodo={handleFinishedTodo}
        />
      </div>
    </div>
  );
}
