import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return(
    <div className="todo-template">
      <div className="title">TODO</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;