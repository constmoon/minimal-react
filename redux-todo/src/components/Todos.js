import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>Text</span>
      <button type="button">Delete</button>
    </div>
  );
};

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;