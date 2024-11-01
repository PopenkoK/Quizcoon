import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/button/Button';
import { login } from '../../services/auth';
import { FormWrapper, InputContainer, LoginContainer, SignUpText } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      setError(error.error);
    }
  };

  return (
    <LoginContainer>
      <FormWrapper>
        <h2>Welcome back</h2>
        {error && <p>{error}</p>}
        <InputContainer placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputContainer
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        <SignUpText>Dont have an account? {<Link to={'/sign-up'}>Sign up</Link>}</SignUpText>
      </FormWrapper>
    </LoginContainer>
  );
};

export default Login;
