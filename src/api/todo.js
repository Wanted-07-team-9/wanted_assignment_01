import { instance } from './http';

export const getTodoList = async () => {
  const instanceGet = await instance.get('/todos');
  return instanceGet;
};

export const createTodo = todo => {
  return instance.post('/todos', { todo });
};

export const updateTodo = async (id, todo, isCompleted) => {
  const instanceUpdate = await instance.put(`/todos/${id}`, { todo, isCompleted });
  return instanceUpdate;
};

export const deleteTodo = async id => {
  const instanceDelete = await instance.delete(`/todos/${id}`);
  return instanceDelete;
};
