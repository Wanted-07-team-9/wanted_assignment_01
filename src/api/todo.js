import { instance } from '../utils/axios';
import { getStorageItem } from '../utils/localStorage';

export const reqTodo = {
  createTodo: body => {
    return instance.get('/todos');
  },
  getTodos: () => {
    const token = getStorageItem('access_token');
    return instance.get('/todos', { headers: { Authorization: `Bearer ${token}` } });
  },
  updateTodo: (id, body) => {
    // /todos/:id
    // PUT
    // status: 200 OK
  },
  deleteTodo: id => {
    // /todos/:id
    // DELETE
    // status: 204 No Content
  },
};