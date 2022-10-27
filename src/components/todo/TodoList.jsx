import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { validateTodoReg } from './../../utils/validation';

const TodoList = ({ todos, createTodo, updateTodo, deleteTodo }) => {
  const [todo, setTodo] = useState('');

  const onChangeTodo = e => {
    setTodo(e.target.value);
  };

  const onCreateTodo = () => {
    const todoVal = validateTodoReg(todo);
    if (!todoVal) {
      alert('3글자 이상 입력해주세요.');
      return;
    }
    createTodo(todo);
    setTodo('');
  };

  const IncompleteTodo = todos.filter(item => !item.isCompleted).length;
  const completeTodo = todos.length - IncompleteTodo;

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex justify-center items-center w-[720px] h-full bg-slate-500 min-h-screen ">
        <div className="flex w-full h-full justify-center items-center flex-col py-2">
          {/**전체 Card Wrapper영역 */}
          <div className=" bg-[#3a3f49] w-[560px] h-fit min-h-[560px] rounded-lg ">
            {/**card Content영역 */}
            <div className="flex justify-center items-center w-full pt-8 px-4 flex-col ">
              {/**상단 text영역 */}
              <div className="flex w-full justify-around">
                <div className="text-white">
                  Incomplete todos
                  <div className="text-center">{IncompleteTodo}</div>
                </div>
                <div className="text-white">
                  Complete todos
                  <div className="text-center">{completeTodo}</div>
                </div>
              </div>
              {/** Input영역 */}
              <div className="flex items-center justify-between w-full mt-5">
                <input
                  type="text"
                  placeholder="Input Todo"
                  className="w-3/4 h-10  rounded-md pl-4"
                  value={todo}
                  onChange={onChangeTodo}
                  onKeyDown={e => {
                    if (e.key === 'Enter') onCreateTodo();
                  }}
                ></input>
                <button
                  className="bg-cyan-300 rounded-md w-1/5 h-10 text-white"
                  onClick={onCreateTodo}
                >
                  Add Todo
                </button>
              </div>
              {/** hr */}
              <div className="w-full mt-4 border-b-4 border-gray-600"></div>
              {/** TodoItemList */}
              <div className="w-full [&>div]:mt-3 pb-8">
                {/** TodoItem */}
                {todos.map(todoObj => (
                  <TodoItem
                    todoObj={todoObj}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    key={`todo_${todoObj.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
