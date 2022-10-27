import React from 'react';
import { useRef } from 'react';

const TodoItemEdit = ({ todo, setEditTodoList }) => {
  const todoText = useRef();
  const editSubmit = (e) => {
    console.log(todoText.current.value);
    console.log('submit');
    setEditTodoList(prevState => prevState.filter(id => id !== todo.id));
  }
  const editCancel = (e) => {
    setEditTodoList(prevState => prevState.filter(id => id !== todo.id));
    console.log('cancel');
  }

  const removeTodo = (e) => {
    console.log('remove');
  }

  const onComplete = () => {
    // onComplete
  }
  
  return (
    <ul>
      <li>
        <span onClick={onComplete}>
          {todo.isCompleted ? "완료" : "미완료"}
        </span>
      </li>
      <li>
        <span>{todo.id}</span>
      </li>
      <li>
        <input type="text" ref={todoText} name={'todo' + todo.id} defaultValue={todo.todo} />
      </li>
      <li className="edit_btns">
        <button name="editSubmit" onClick={editSubmit}>제출</button>
        <button name="editCancel" onClick={editCancel}>취소</button>
      </li>
      <li>
        <button name="delTodo" onClick={removeTodo}>삭제</button>
      </li>
    </ul>
  );
};
export default TodoItemEdit;
