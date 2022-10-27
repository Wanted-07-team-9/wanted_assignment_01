import React, { useState, useEffect } from 'react';
import Template from '../components/Todo/Template';
import TodoList from '../components/Todo/TodoList';
import TodoInsert from '../components/Todo/TodoInsert';
import { getTodoList, createTodo, updateTodo, deleteTodo } from '../api/todo';
import { MdAddCircle } from 'react-icons/md';
import styled from 'styled-components';
import Pagination from '../utils/Pagination';
import { validateTodo } from '../utils/todoValidation';

function TodoListPage() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const token = localStorage.getItem('accessToken');

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = text => {
    if (validateTodo) {
      return alert('할일을 입력해 주세요');
    } else {
      createTodo(text);
    }
  };

  const onCheckToggle = id => {
    setTodoList(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    );
  };
  const getTodos = async () => {
    const todoData = await getTodoList();
    setTodoList(todoData.data);
  };

  useEffect(() => {
    getTodos();
  }, [todoList, token]);

  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  };
  const onRemove = id => {
    if (window.confirm('정말로 삭제 하시겠습니까?')) {
      deleteTodo(id);
    }
  };
  const onUpdate = (id, todo, isCompleted) => {
    if (validateTodo) {
      return alert('수정할 할일을 입력해 주세요');
    }
    updateTodo(id, todo, isCompleted);
  };

  return (
    <div>
      <Template todoLength={todoList.length}>
        <TodoList
          offset={offset}
          limit={limit}
          todoList={todoList}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
        <AddTodoButton onClick={onInsertToggle}>
          <MdAddCircle />
        </AddTodoButton>
        {insertToggle && (
          <TodoInsert
            todoList={todoList}
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            selectedTodo={selectedTodo}
            onUpdate={onUpdate}
          />
        )}
        {todoList.length ? (
          <Pagination
            total={todoList.length}
            limit={limit}
            page={page}
            setPage={setPage}
            setLimit={setLimit}
          />
        ) : null}
      </Template>
    </div>
  );
}

export default TodoListPage;

const AddTodoButton = styled.div`
  position: fixed;
  right: 50px;
  bottom: 150px;
  z-index: 100;
  width: 100px;
  height: 100px;
  cursor: pointer;
  font-size: 5rem;
  color: #6c567b;
  @media (max-width: 375px) {
    right: 0px;
  }
`;
