import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #fdf1e4;
  padding: 20px;
`;

export const Header = styled.h2`
  font-size: 24px;
  color: #333;
`;

// Toggle switch container styled as buttons
export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  border: 1px solid #333;
  border-radius: 20px;
  overflow: hidden;
`;

export const ToggleButton = styled.button`
  flex: 1;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#74c69d' : 'transparent')};
  color: #333;
  border: none;
  border-radius: ${({ active }) => (active ? '20px' : '0')};
  border: ${({ active }) => (active ? '1px solid #333' : 'none')};
  font-weight: bold;
  transition:
    background-color 0.3s,
    border 0.3s;

  &:focus {
    outline: none;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  background-color: #74c69d;
  padding: 20px;
  border-radius: 15px;
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
`;

export const WhiteContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 360px;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const QuestionContent = styled.div`
  text-align: start;
  width: 100%;
`;

export const QuestionContainer = styled.div`
  margin-bottom: 20px;
  color: #333;
  text-align: start;
  width: 100%;

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const QuestionText = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Option = styled.div`
  margin: 5px 0;

  input {
    margin-right: 10px;
  }

  label {
    font-size: 16px;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin: 10px 10px 0 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ $position }) => ($position === 'left' ? '10px' : 'auto')};
  right: ${({ $position }) => ($position === 'right' ? '10px' : 'auto')};

  &:hover {
    color: #333;
  }
`;

export const FooterButton = styled.button`
  margin: 10px 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Add card component styles here

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 300px;
  height: 200px;
  margin-top: 20px;
  cursor: pointer;
`;

export const Card = styled.div`
  border: 1px solid black;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ $isFlipped }) => ($isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #fff;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #2ecc71;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transform: rotateY(180deg);
`;
