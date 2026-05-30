import TodoItem from "./TodoItem";

const finishedTodosHeader = {
  textAlign: "center",
  color: "green",
};

const FinishedTodos = ({ todoList, deleteTodo, handleFinishedTodo }) => {
  return (
    <div>
      <h1 style={finishedTodosHeader}>Finished Todos</h1>
      <ul className="todos-list">
        {todoList
          .filter((todo) => todo.compeleted)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              handleFinishedTodo={handleFinishedTodo}
            />
          ))}
      </ul>
    </div>
  );
};

export default FinishedTodos;
