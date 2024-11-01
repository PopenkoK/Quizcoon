import styled from 'styled-components';

export const QuizzesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 20px;
  padding: 15px 150px;
  background-color: #fdf1e4;
  button {
    font-size: 20px;
    width: 200px;
    padding-block: 15px;
  }
  h1 {
    font-size: 30px;
  }
  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    flex-wrap: wrap;
    gap: 40px;
  }
`;
