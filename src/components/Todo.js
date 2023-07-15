import React, { useState } from "react";

const Todo = () => {
  const [addTodo, setTodo] = useState([]);
  const [newInput, setNewInput] = useState("");

  const handleInput = (event) => {
    setNewInput(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: addTodo.length === 0 ? 1 : addTodo[addTodo.length - 1].id + 1,
      taskName: newInput,
    };
    setTodo([...addTodo, task]);
  };

  const deleteTodo = (id) => {
    setTodo(addTodo.filter((todo) => todo.id !== id));
  };

  const updateTodo = () => {
    console.log("todo");
  };

  return (
    <div>
      <input onChange={handleInput} />
      <button className="button" onClick={addTask}>
        Add Task
      </button>
      <div className="listTodo">
        {addTodo.map((todo) => {
          return (
            <div className="todo">
              <h2>{todo.taskName}</h2>
              <button className=" button" onClick={updateTodo}>
                Completed
              </button>
              <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
