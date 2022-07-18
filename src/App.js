import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // STATES
  const initialState =JSON.parse(localStorage.getItem("todos")) || [];
  const [inputText, SetInputText] = useState(" ");
  const [todos, setTodos] = useState(initialState);
  const [status, setStatus] = useState("all");
  const [fillteredTodos, setFillteredTodos] = useState([]);

  

  useEffect(() => {
    const fillterHandler = () => {
      switch (status) {
        case "completed":
          setFillteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFillteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFillteredTodos(todos);
          break;
      }
    };
    fillterHandler();
  }, [todos, status]);

  //
  

  // save to Local storage
  
  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]
  );

  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        SetInputText={SetInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        fillteredTodos={fillteredTodos}
      />
    </div>
  );
}

export default App;
