import axiosInstance from '../utils/axiosInstance';

export const createTodo = async todo => {
  try {
    const response = await axiosInstance.post('/todos', {
      todo,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await axiosInstance.get('/todos');
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateTodo = async (id, todo, isCompleted, userId) => {
  try {
    const response = await axiosInstance.put(`todos/${id}`, {
      id,
      todo,
      isCompleted,
      userId,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async id => {
  try {
    const response = await axiosInstance.delete(`todos/${id}`);
  } catch (error) {
    console.log(error);
  }
};
