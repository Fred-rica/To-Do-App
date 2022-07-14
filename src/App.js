import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // STATES
  const [inputText, SetInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [fillteredTodos, setFillteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    fillterHandler();
  }, [todos, status]);

  //
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

  // save to Local storage
  const saveLocalTodos =()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos =()=>{
    if (localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let todoLocal=JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }

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
