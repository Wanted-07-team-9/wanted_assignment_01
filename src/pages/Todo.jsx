import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reqTodo } from '../api/todo';
import Pagination from '../components/Pagination';
import TodoItem from '../components/TodoItem';
import TodoItemEdit from '../components/TodoItemEdit';
import { TodoDiv, TodoForm, TodoTable, TodoWrap } from '../styles/todo';
import { removeStorageItem } from '../utils/localStorage';
import { validEmptyCheck } from '../utils/validCheck';

const TodoPage = () => {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [editTodoList, setEditTodoList] = useState([]);

  // Todo Table Pagination 옵션
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const getTodos = async () => {
    try {
      const response = await reqTodo.getTodos();
      if (response.status === 200) {
        setTodoList(response.data.reverse());
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert('인증된 사용자가 아닙니다.');
        signOut();
      }
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const createTodo = async e => {
    e.preventDefault();
    const isEmpty = validEmptyCheck(newTodo);
    if (!isEmpty) {
      try {
        const response = await reqTodo.createTodo({ atodo: newTodo });
        if (response.status === 201) {
          alert('Todo가 추가되었습니다.');
          setTodoList(prev => [response.data, ...prev]);
          setNewTodo('');
        }
      } catch (error) {
        if (error.response.status === 400) {
          alert('Todo 추가를 실패했습니다.\n다시 확인해주세요.');
        }
      }
      setErrorMsg('');
    } else {
      setErrorMsg('내용을 확인해주세요.');
    }
  };

  const todoChange = e => {
    const { value } = e.target;
    setNewTodo(value);
  };

  const signOut = () => {
    removeStorageItem('access_token');
    navigate('/');
  };

  return (
    <TodoWrap>
      <header>
        <h1>Todo List</h1>
        <button onClick={signOut}>로그아웃</button>
      </header>
      <TodoForm onSubmit={createTodo}>
        <div>
          <input
            type="text"
            name="todo"
            value={newTodo}
            onChange={todoChange}
            placeholder="todo 적기"
          />
          <button type="submit">추가</button>
        </div>
        <p>{errorMsg}</p>
      </TodoForm>
      <TodoDiv>
        <TodoTable>
          <ul className="subject">
            <li>완료여부</li>
            <li>번호</li>
            <li>할일</li>
            <li>수정</li>
            <li>삭제</li>
          </ul>
          {todoList.slice(offset, offset + limit).map((todo, index) => {
            const isEdit = editTodoList.includes(todo.id);
            return isEdit ? (
              <TodoItemEdit
                key={index}
                todo={todo}
                setTodoList={setTodoList}
                setEditTodoList={setEditTodoList}
              />
            ) : (
              <TodoItem
                key={index}
                todo={todo}
                setTodoList={setTodoList}
                setEditTodoList={setEditTodoList}
              />
            );
          })}
        </TodoTable>
      </TodoDiv>
      <footer>
        <Pagination total={todoList.length} limit={limit} page={page} setPage={setPage} />
      </footer>
    </TodoWrap>
  );
};

export default TodoPage;
