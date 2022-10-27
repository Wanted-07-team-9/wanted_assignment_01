import styled from 'styled-components';
import { CommonStyle } from './common';

export const TodoWrap = styled.div`
  ${CommonStyle}
  padding: 3% 0;
  width: 37%;
  margin: auto;
  header {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      position: absolute;
      right: 0;
    }
  }
  header,
  footer {
    margin: 1rem 0;
  }
  input {
    padding: 6px;
    border: 1px solid #aaa;
    border-radius: 3px;
    background: #fff;
  }
  input:disabled {
    background: #dadada;
    border: 1px solid #d6d6d6;
  }
  button {
    padding: 0.2em 0.8em;
    margin: 0 5px;
  }
  footer {
    button {
      border-width: 1px;
    }
    button[aria-current='page'] {
      background: #69d2e7;
    }
  }
`;

export const TodoForm = styled.form`
  width: 40%;
  height: 60px;
  text-align: center;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  p {
    padding-top: 0.5em;
    text-align: center;
    font-size: 0.7em;
    color: #ff0000;
  }
`;

export const TodoDiv = styled.div`
  height: 500px;
`;

export const TodoTable = styled.main`
  display: table;
  width: 700px;
  padding: 0 1%;
  border-collapse: collapse;

  ul {
    display: table-row;
    border-bottom: 1px solid #aaa;
  }
  ul:not(.subject) {
    li span.empty_check {
      cursor: pointer;
    }
  }
  ul.subject {
    display: table-header-group;
    border-bottom: 1.5px solid #aaa;
  }
  li {
    display: table-cell;
    text-align: center;
    font-size: 0.8em;
    padding: 0.5em;

    button {
      padding: 0.2em 0.8em;
      margin: 0 5px;
    }
  }
  li.edit_btns {
    width: 140px;
  }
`;
