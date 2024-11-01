import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import { getUser } from '../../services/auth';
import Button from '../button/Button';
import {
  ActionsList,
  HeaderContainer,
  LogoContainer,
  Popup,
  UserButton,
  UserInfoContainer,
  UserNickname,
} from './styles';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const togglePopup = () => setShowPopup(!showPopup);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userData = await getUser(token);
          setUser(userData);
        } catch (error) {
          console.error('Failed to fetch user:', error);
        }
      }
    };
    fetchUser();
  }, [location]);

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    setUser(null);
    setShowPopup(false);
    navigate('/sign-in');
  };

  const handleQuizzes = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
          Quizcoon
        </LogoContainer>
      </Link>
      {location.pathname !== '/sign-in' && user ? (
        <UserButton onClick={togglePopup}>
          <FaUser />
        </UserButton>
      ) : (
        <div>
          <Button onClick={() => navigate('/sign-in')}>Log in</Button>
        </div>
      )}
      {showPopup && (
        <Popup>
          <UserInfoContainer>
            <img src={user.avatar} alt="Avatar" />
            <UserNickname>
              <span>{user.name}</span>
              <span>{user.email}</span>
            </UserNickname>
          </UserInfoContainer>
          <ActionsList>
            <Button onClick={handleQuizzes}>My quizzes</Button>
            <Button>Create quiz</Button>
            <Button onClick={handleLogOut}>Log out</Button>
          </ActionsList>
        </Popup>
      )}
    </HeaderContainer>
  );
};

export default Header;
