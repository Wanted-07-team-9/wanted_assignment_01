import React, { useState } from 'react';
import { useRef } from 'react';
import { reqTodo } from '../api/todo';

const TodoItemEdit = ({ todo, setTodoList, setEditTodoList }) => {
  const todoText = useRef();
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const editSubmit = async e => {
    const editValue = todoText.current.value;
    const body = {
      todo: editValue,
      isCompleted: isCompleted,
    };
    const response = await reqTodo.updateTodo(todo.id, body);

    if (response.status === 200) {
      alert('수정 되었습니다.');
      setTodoList(prevState =>
        prevState.map(item => (item.id === todo.id ? { ...item, ...body } : item))
      );
      setEditTodoList(prevState => prevState.filter(id => id !== todo.id));
    }
  };
  const editCancel = async e => {
    setEditTodoList(prevState => prevState.filter(id => id !== todo.id));
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

  const onComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <ul>
      <li>
        <input type="checkbox" onClick={onComplete} defaultChecked={isCompleted} />
      </li>
      <li>
        <span>{todo.id}</span>
      </li>
      <li>
        <input type="text" ref={todoText} name={'todo' + todo.id} defaultValue={todo.todo} />
      </li>
      <li className="edit_btns">
        <button name="editSubmit" onClick={editSubmit}>
          제출
        </button>
        <button name="editCancel" onClick={editCancel}>
          취소
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
export default TodoItemEdit;
