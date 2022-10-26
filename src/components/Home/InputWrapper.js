import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  width: 100%;
  label {
    font-weight: bold;
    font-size: 1.5rem;
    white-space: nowrap;
    margin-bottom: 5%;
  }
  input {
    width: 100%;
    margin-bottom: 5%;
  }
  span {
    font-size: 1.3rem;
    margin-bottom: 5%;
  }
`