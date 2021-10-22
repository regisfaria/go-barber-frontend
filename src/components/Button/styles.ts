import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 54px;
  border: 0px;
  border-radius: 10px;
  padding: 0 16px;
  margin-top: 16px;
  width: 100%;
  color: #312e38;
  font-weight: 700;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
