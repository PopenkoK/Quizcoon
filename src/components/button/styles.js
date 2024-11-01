import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 0;
  border-radius: 16px;
  background-color: #74c69d;
  text-align: center;
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    filter: brightness(0.95);
  }
  &:active {
    transform: scale(0.97);
  }
`;
