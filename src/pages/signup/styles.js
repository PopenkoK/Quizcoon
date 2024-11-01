import styled from 'styled-components';

export const SignUpTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fdf1e4; // цвет фона страницы
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #74c69d; // цвет формы
  width: 600px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  button {
    max-width: 100px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #333;
    background-color: #fdf1e4;
  }
  h2 {
    margin-bottom: 20px;
    color: #333; // цвет текста заголовка
  }
`;

export const InputContainer = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #333;
  background-color: transparent;
  outline: none;
`;

export const LoginText = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #333;
`;
