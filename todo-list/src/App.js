import React, { useState }  from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: true,
    },
    {
      id: 3,
      text: '기능 구현',
      checked: false,
    }
  ]);

  return(
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
