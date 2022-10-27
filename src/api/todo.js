import { instance } from '../utils/axios';
import { getStorageItem } from '../utils/localStorage';

const config = () => {
  const token = getStorageItem('access_token');
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const reqTodo = {
  createTodo: body => {
    return instance.post('/todos', body, config());
  },
  getTodos: () => {
    return instance.get('/todos', config());
  },
  updateTodo: (id, body) => {
    return instance.put(`/todos/${id}`, body, config());
  },
  deleteTodo: id => {
    return instance.delete(`/todos/${id}`, config());
    // status: 204 No Content
  },
};
