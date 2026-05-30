import TodoItem from "./TodoItem";

function RenderTodos({ todoList, deleteTodo, handleFinishedTodo }) {
  return (
    <ul className="todos-list">
      {todoList
        .filter((todo) => !todo.compeleted)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            handleFinishedTodo={handleFinishedTodo}
          />
        ))}
    </ul>
  );
}

export default RenderTodos;
