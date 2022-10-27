import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { apis } from '../../api/api';
import Input from '../elements/Input';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Icon from '../elements/Icon';
import Label from '../elements/Label';
import { todoCheck } from '../../utils/regex';

const CreateForm = ({ props, todoList, setTodoList }) => {
  const inputRef = useRef(null);
  const initialState = {
    todo: '',
  };

  const [todo, setTodo] = useState(initialState);
  const [todoMsg, setTodoMsg] = useState('');
  const [todoMsgColor, setTodoMsgColor] = useState('');
  const [todoValidCheck, setTodoVaildCheck] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
    validation(name, value);
  };

  const validation = (name, value) => {
    if (name === 'todo') {
      if (!todoCheck(value)) {
        setTodoMsg('1자리 이상 입력해주세요.');
        setTodoMsgColor('#FF1F2F');
        setTodoVaildCheck(false);
      } else {
        setTodoMsg('');
        setTodoMsgColor('');
        setTodoVaildCheck(true);
      }
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    //axios
    apis.create_todo(todo).then(({ data }) => setTodoList([...todoList, data]));
    setTodo(initialState);
    inputRef.current.focus();
  };
  return (
    <>
      <Wrapper>
        <Form>
          <InputWrapper>
            <Input
              name="todo"
              type="text"
              onChange={onChangeHandler}
              Ref={inputRef}
              value={todo.todo}
              width={'95%'}
              placeholder={'오늘의 할 일을 기록해보세요.'}
              required={'required'}
            ></Input>
            <Label label={todoMsg} color={todoMsgColor}></Label>
          </InputWrapper>
          {todoValidCheck ? (
            <Icon
              icon={faPlus}
              width={'1rem'}
              height={'1rem'}
              color={'white'}
              bgColor={'#5D5FEF'}
              borderRadius={'2rem'}
              onClick={onSubmitHandler}
            ></Icon>
          ) : (
            <Icon
              icon={faPlus}
              width={'1rem'}
              height={'1rem'}
              color={'white'}
              bgColor={'#5D5FEF'}
              borderRadius={'2rem'}
              onClick={e => {
                e.preventDefault();
                setTodoMsg('1자리 이상 입력해주세요.');
                setTodoMsgColor('#FF1F2F');
                setTodoVaildCheck(false);
              }}
            ></Icon>
          )}
        </Form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.1rem;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 40%;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 50%;
  }
  @media (max-width: 767px) {
    /* Mobile */
    width: 60%;
  }
`;

const Form = styled.div`
  width: 90%;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CreateForm;
