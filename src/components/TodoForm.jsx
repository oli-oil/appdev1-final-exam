import React from "react";

const TodoForm = ({addTodo, setNewTodo, newTodo}) => {
  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo("");

  };

  return (
    <div>
      <input 
        type="text"
        placeholder="add to do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;