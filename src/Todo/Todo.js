import React, { useState } from "react";
import Input from "../Component/Input/Input";
import Container from "../Component/Container/Container";
import "./Todo.css";
import useTodo from "../Hooks/useTodo";
import useInput from "../Hooks/useInput";

const Todo = () => {
  const [container, add, remove, done, complete, doing, clearCompleted] = useTodo([]);
  const [state, handleChange, handleSubmit] = useInput(add);

  
  return (
    <div className="page__content">
      <div className="text">todos</div>
      
        <div className="card">
          <form onSubmit={handleSubmit}>
            <Input name="todo" value={state.todo} handleChange={handleChange} />
            <input type="submit" style={{ display: "none" }} />
          </form>
          <hr />
          <Container container={container} remove={remove} done={done} complete={complete} doing={doing} clear={clearCompleted} />
          
        </div>
     
    </div>
  );
};

export default Todo;
