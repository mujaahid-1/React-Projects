import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoApp({ newTodos }) {
  const [todoValue, setTodoValue] = useState("");

  function handleAddTodo(e) {
    e.preventDefault();

    if (!todoValue) return;

    const newTodo = {
      id: uuidv4(),
      description: todoValue,
      packed: false,
    };

    newTodos(newTodo);
    setTodoValue("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          placeholder="Enter a task..."
        />
        <button>Add</button>
      </form>
    </div>
  );
}
