import React, { useState } from "react";

function InputTodo({ addTodoItem }) {
  const [title, settitle] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    settitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      settitle("");
      setMessage("");
    } else {
      setMessage("please add item");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
}

export default InputTodo;
