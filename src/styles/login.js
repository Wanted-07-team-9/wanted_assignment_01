import styled from 'styled-components';
import { CommonStyle, FormStyle } from './common';

export const Main = styled.main`
  ${CommonStyle}
  ${FormStyle}
  p {
    padding-top: 0.5em;
    text-align: right;
    font-size: 0.7em;
    color: #ff0000;
  }
`;

export const InputDiv = styled.div`
  height: 60px;
  padding-bottom: 0.5em;

  input {
    background: #fafafa;
    border: 1px solid #eeeeee;
    padding: 12px;
    width: 100%;
  }

  p {
    padding-top: 0.2em;
  }
`;
