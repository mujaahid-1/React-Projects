export default function TodoItem({ todo, deleteTodo, handleFinishedTodo }) {
  return (
    <li>
      <div className="space-text-btn">
        <div className="todo-text">
          <input
            type="checkbox"
            checked={todo.compeleted}
            onChange={() => handleFinishedTodo(todo.id)}
          />
          <span className={todo.compeleted ? "completed-todo" : ""}>
            {todo.description}
          </span>
        </div>

        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}
