import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleComplete } from "../redux/todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <TextField
        label="Add Todo"
        value={text}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleAddTodo} fullWidth>
        Add Todo
      </Button>
      <ul style={{ padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 8,
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span style={{ flex: 1, marginLeft: 8 }}>{todo.text}</span>
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
