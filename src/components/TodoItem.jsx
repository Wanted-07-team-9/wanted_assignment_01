import React from 'react';
import { reqTodo } from '../api/todo';

const TodoItem = ({ todo, setEditTodoList, setTodoList }) => {
  const onTodoEdit = () => {
    setEditTodoList(prevState => [...prevState, todo.id]);
  };

  const removeTodo = async e => {
    if (!window.confirm('삭제 하시겠습니까?')) {
      return false;
    }

    try {
      const response = await reqTodo.deleteTodo(todo.id);
      if (response.status === 204) {
        alert('todo가 삭제되었습니다.');
        setTodoList(prevState => prevState.filter(item => item.id !== todo.id));
      }
    } catch (error) {
      if (error.response.status === 404) alert('삭제에 실패하였습니다.\n다시 확인해주세요.');
    }
  };

  return (
    <ul>
      <li>
        <input type="checkbox" defaultChecked={todo.isCompleted} />
      </li>
      <li>
        <span>{todo.id}</span>
      </li>
      <li>
        <input type="text" name={'todo' + todo.id} value={todo.todo} disabled />
      </li>
      <li className="edit_btns">
        <button name="editTodo" onClick={onTodoEdit}>
          수정
        </button>
      </li>
      <li>
        <button name="delTodo" onClick={removeTodo}>
          삭제
        </button>
      </li>
    </ul>
  );
};
export default TodoItem;
