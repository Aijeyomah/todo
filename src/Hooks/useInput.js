import { useState } from "react";

const useInput = (add, initialstate = { todo: "" }) => {
  const [state, setState] = useState(initialstate);
  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    add(state);
    setState(initialstate);
  };
  return [state, handleChange, handleSubmit];
};

export default useInput;
