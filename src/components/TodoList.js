import React from "react";
import Todo from "./Todo";

function TodoList({ todos,setTodos, fillteredTodos }) {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {fillteredTodos.map((todo) => (
          <Todo 
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          key={todo.id} 
          text={todo.text}
           />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
