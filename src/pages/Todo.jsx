import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reqTodo } from "../api/todo";
import Pagination from "../components/Pagination";
import TodoItem from "../components/TodoItem";
import TodoItemEdit from "../components/TodoItemEdit";
import { TodoDiv, TodoTable, TodoWrap } from "../styles/todo";
import { removeStorageItem } from "../utils/localStorage";

const TodoPage = () => {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodoList, setEditTodoList] = useState([]);

  // Todo Table Pagination 옵션
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const getTodos = async () => {
    try {
      const response = await reqTodo.getTodos();
      if(response.status === 200) {
        setTodoList(response.data);
      }
    }
    catch(error) {
      if(error.response.status === 401) {
        alert("인증된 사용자가 아닙니다.");
        signOut();
      }
    }
  };

  useEffect(() => {
    getTodos();
  }, []);


  const createTodo = async (e) => {
    e.preventDefault();

    try {
      // const response = await reqTodo.createTodo();
      // if(response.status === 200) {
      //   setTodoList(response.data);
      // }
    }
    catch(error) {
      if(error.response.status === 401) {
        alert("인증된 사용자가 아닙니다.");
        signOut();
      }
    }
  };

  const todoChange = (e) => {
    const { value } = e.target;
    setNewTodo(value);
    // if(name === "todo") {
    //   setNewTodo(value);
    // } else {
    //   const editId = Number(name.replace('todo', ''));
    //   setTodoList(prev => prev.map((obj) => obj.id === editId ? { ...obj, todo: value } : {...obj})); 
    // }
  }

  const signOut = () => {
    removeStorageItem("access_token");
    navigate("/");
  }
  
  return (
    <TodoWrap>
      <header>
        <h1>Todo List</h1>
        <button onClick={signOut}>로그아웃</button>
      </header>
      <form onSubmit={createTodo}>
        <input type="text" name="todo" value={newTodo} onChange={todoChange} placeholder="todo 적기" />
        <button type="submit">추가</button>
      </form>
      <TodoDiv>
        <TodoTable>
          <ul className="subject">
            <li>완료여부</li>
            <li>번호</li>
            <li>할일</li>
            <li>수정</li>
            <li>삭제</li>
          </ul>
          {todoList.slice(offset, offset + limit).map(
            (todo, index) => {
              const isEdit = editTodoList.includes(todo.id);
              return isEdit ? (
                <TodoItemEdit
                  key={index}
                  todo={todo}
                  setEditTodoList={setEditTodoList}
                />
              ) : (
                <TodoItem
                  key={index}
                  todo={todo}
                  setEditTodoList={setEditTodoList}
                />
              );
            }
          )}
        </TodoTable>
      </TodoDiv>
      <footer>
        <Pagination total={todoList.length} limit={limit} page={page} setPage={setPage} />
      </footer>
    </TodoWrap>
  );
};

export default TodoPage;
