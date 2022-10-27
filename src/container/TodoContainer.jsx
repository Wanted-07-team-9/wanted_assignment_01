import React, { useEffect, useState } from 'react';
import TodoList from '../components/todo/TodoList';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as todoAPI from '../api/todo';

const TodoContainer = () => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!authState) navigate('/');
  }, [authState, navigate]);

  useEffect(() => {
    getTodos();
  }, []);

  const createTodo = async todo => {
    const res = await todoAPI.createTodo(todo);
    const todoData = res.data;
    if (res.status === 201) {
      setTodos(todos => todos.concat(todoData));
    }
  };

  const getTodos = async () => {
    const res = await todoAPI.getTodos();
    const todoDatas = res.data;
    setTodos(todoDatas);
  };

  const updateTodo = async (item, object) => {
    const res = await todoAPI.updateTodo(item, object);
    const updateTodo = res.data;
    if (res.status === 200)
      setTodos(todos =>
        todos.map(originTodo => (originTodo.id === updateTodo.id ? updateTodo : originTodo))
      );
  };

  const deleteTodo = async todoId => {
    const res = await todoAPI.deleteTodo(todoId);
    if (res.status === 204) {
      setTodos(todos => todos.filter(item => item.id !== todoId));
    }
  };

  if (!authState) return;

  return (
    <TodoList
      todos={todos}
      createTodo={createTodo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default TodoContainer;
