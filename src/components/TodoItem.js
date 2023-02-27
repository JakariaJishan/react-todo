import React, { useState } from "react";
import "../styles/todoItem.css";
export default function TodoItem({
  itemProp,
  handleChange,
  delTodo,
  setUpdate,
}) {
  const [editing, setEditing] = useState(false);

  const editTodo = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleUpdatedDone = (e) =>{
    if (e.key === 'Enter') {
      setEditing(false)
    }
  }

  return (
    <li className="item">
      <div className="content" style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={editTodo}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </div>
      <input
        type="text"
        value={itemProp.title}
        className="textInput"
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}
