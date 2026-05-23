import { useState } from "react";

import RenderTodos from "./components/RenderTodos";
import TodoApp from "./components/TodoApp";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function newTodos(value) {
    setTodoList((todos) => [...todos, value]);
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleFinishedTodo(id) {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, packed: !todo.packed } : todo,
      ),
    );
  }

  return (
    <div className="todo">
      <TodoApp newTodos={newTodos} />
      <RenderTodos
        todoList={todoList}
        deleteTodo={deleteTodo}
        handleFinishedTodo={handleFinishedTodo}
      />
    </div>
  );
}
