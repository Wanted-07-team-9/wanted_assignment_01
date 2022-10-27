import React from 'react';

const TodoItem = ({ todo, setEditTodoList }) => {
  const onTodoEdit = () => {
    setEditTodoList(prevState => [...prevState, todo.id]);
  };

  const removeTodo = (e) => {
    console.log('remove');
  }

  return (
    <ul>
      <li>{todo.isCompleted ? <span>완료</span> : <span>미완료</span>}</li>
      <li>
        <span>{todo.id}</span>
      </li>
      <li>
        <input type="text" name={'todo' + todo.id} value={todo.todo} disabled />
      </li>
      <li className="edit_btns">
        <button name="editTodo" onClick={onTodoEdit}>수정</button>
      </li>
      <li>
        <button name="delTodo" onClick={removeTodo}>삭제</button>
      </li>
    </ul>
  );
};
export default TodoItem;
