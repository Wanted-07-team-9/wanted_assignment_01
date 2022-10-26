import styled from 'styled-components'

export const SubmitBtn = styled.button`
  background-color: ${(props)=>props.disabled ? '#dedede' : '#0651f5'};
  cursor : ${(props)=>props.disabled ? 'default' : 'pointer'};
  width: 100%;
  color: var(--color-white);
  border:none;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 150%;
  font-weight: bold;
`