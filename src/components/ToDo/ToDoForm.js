import { useState } from 'react'
import styled from 'styled-components'
import { createTodo } from '../../api/todo'
import AddBtn from '../../assets/svg/AddBtn'
import ModalAlert from '../ModalAlert'
import { validateToDoInput } from '../../utils/regex'

const ToDoForm = ({invalidate}) => {
  const [toDoContent, setToDoContent] = useState('')
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(0)
  
  const handleContent = (e) => {
    setToDoContent(e.target.value)
  }
  const handleCreate = async(toDoContent) => {
    await createTodo(toDoContent)
    invalidate()
    handleModalClose()
  }
  const handleCreateModalOpen = (toDo) => {
    if (validateToDoInput(toDo)) {
      handleModalOpen('submit', '할일을 추가하시겠습니까?')
    } else {
      handleModalOpen('empty', '할일을 입력해주세요!')
    }
  }
  const handleModalOpen = (option, message) => {
    setModalMessage(message)
    setIsModalOpen(option)
  }
  const handleModalClose = () => {
    setIsModalOpen(0)
  }
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateModalOpen(toDoContent)
      return
    } else {
      return
    }
  }
  return(
    <FormWrapper>
    <InputWrapper>
      <label id="text" />
      <input id="text" value={toDoContent} onKeyDown={handleEnterPress} onChange={handleContent} />
      <div onClick={() => handleCreateModalOpen(toDoContent)}>
        <AddBtn />
      </div>
    </InputWrapper>
    {isModalOpen === 'empty' ? <ModalAlert rightBtnClick={handleModalClose} rightBtnMessage='확인' >{modalMessage}</ModalAlert> : <></>}
    {isModalOpen === 'submit' ? <ModalAlert leftBtnClick={() => handleCreate(toDoContent)} leftBtnMessage='네' rightBtnClick={handleModalClose} rightBtnMessage='아니오' >{modalMessage}</ModalAlert> : <></>}
  </FormWrapper>
  )
}

const FormWrapper = styled.div`
  caret-color: var(--color-blue );
`
const InputWrapper = styled.div`
  display: flex;
  input {
    width: 90%;
  }
  div {
    margin-left: auto;
    cursor: pointer;
  }
  @media screen and (max-width: 413px) {
    input {
    width: 80%;
  }
  }
`

export default ToDoForm