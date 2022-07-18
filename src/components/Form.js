import React from "react";

function Form({ SetInputText, todos, setTodos, inputText,setStatus }) {
  const inputTextHandler = (e) => {
    SetInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    SetInputText("");
  };

  const todoStatusHandler=(e)=>{
    setStatus(e.target.value);
  }
  
  return (
    <form>
      <div className="input-container">
      <input
        onChange={inputTextHandler}
        type="text"
        value={inputText}
        className="todo-input"
        
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      </div>
      <div  className="select">
        <select  onChange={todoStatusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
