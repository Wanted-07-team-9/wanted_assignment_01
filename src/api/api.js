import instance from './axios';

export const apis = {
  //sign_up
  sign_up: formData => {
    return instance.post(`/auth/signup`, formData);
  },
  //sign_in
  sign_in: formData => {
    return instance.post(`/auth/signin`, formData);
  },
  // todo : CRUD
  create_todo: todo => {
    return instance.post('/todos', todo);
  },
  get_todos: () => instance.get('/todos'),
  update_todo: (id, todo, isCompleted) => {
    return instance.put(`/todos/${id}`, { todo, isCompleted });
  },
  delete_todo: id => instance.delete(`/todos/${id}`),
};
