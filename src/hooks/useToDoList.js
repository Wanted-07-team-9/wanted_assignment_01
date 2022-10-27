import {getTodos} from '../api/todo'
import {useFetch} from '../hooks/useFetch'

export const useToDoList = () => {
  const {data: todoList, invalidate} = useFetch(['getTodoList'], () => getTodos())
  return [todoList, invalidate]
}