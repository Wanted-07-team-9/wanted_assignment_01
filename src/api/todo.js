import { client } from './client';

export const createTodo = todo => client.post('/todos', { todo });

export const getTodos = () => client.get('/todos');

export const updateTodo = (todoObj, updateObj) => {
  const type = updateObj.type; // isCompleted 또는 todo
  const data = updateObj.data; // 바꾸려고 하는 bool값 또는 string
  return client.put(`/todos/${todoObj.id}`, {
    todo: todoObj.todo,
    isCompleted: todoObj.isCompleted,
    [type]: data,
  });
};

export const deleteTodo = todoId => client.delete(`/todos/${todoId}`);
