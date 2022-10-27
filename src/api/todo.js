import axiosInstance from '../utils/axiosInstance';
import { getToken } from '../utils/localStorage';

const token = getToken()
export const createTodo = async(todo)=> {
  try {
    const response = await axiosInstance.post('/todos', {
      todo,
    },{
      headers : {
        Authorization : `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async () => {
  try {
    const {data} =     await axiosInstance.get('/todos',{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    return data
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateTodo = async (id, todo, isCompleted, userId) => {
  try {
    await axiosInstance.put(`todos/${id}`, {
      id,
      todo,
      isCompleted,
      userId,
    },{
      headers : {
        Authorization : `Bearer ${token}`
      }
    }).then((res)=>console.log(res))
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async id => {
  try {
    await axiosInstance.delete(`todos/${id}`,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    });
  } catch (error) {
    console.log(error);
  }
};
