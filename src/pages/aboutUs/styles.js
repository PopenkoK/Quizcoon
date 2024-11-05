import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 100px;
  height: 100vh;
  background-color: #fdf1e4;

  h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #555;
    max-width: 800px;
    text-align: center;
  }
`;
