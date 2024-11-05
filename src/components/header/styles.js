import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #74c69d;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const UserButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;
`;

export const Popup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 70px; /* Розташування нижче хедера */
  right: 20px; /* Розташування попапу біля правого краю */
  width: 260px;
  padding: 20px;
  background-color: #fdf1e4;
  border: 1px solid #ccc;
  border-radius: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding-bottom: 100px;
  justify-content: center;
  z-index: 5;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 20px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const UserNickname = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ActionsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;
`;
