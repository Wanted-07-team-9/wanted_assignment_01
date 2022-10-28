import React from 'react';
import Background from '../components/common/Background';
import Nav from '../components/common/Nav';
import TodoContainer from './../container/TodoContainer';

const TodoPage = () => {
  return (
    <Background>
      <Nav />
      <TodoContainer />
    </Background>
  );
};

export default TodoPage;
