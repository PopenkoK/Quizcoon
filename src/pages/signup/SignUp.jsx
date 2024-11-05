import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/button/Button';
import { register } from '../../services/auth';
import { FormWrapper, InputContainer, LoginText, SignUpTextContainer } from './styles';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const data = await register(name, email, password);
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      setError(error.error);
    }
  };

  return (
    <SignUpTextContainer>
      <FormWrapper>
        <h2>Welcome</h2>
        {error && <p>{error}</p>}
        <InputContainer placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <InputContainer placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputContainer
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputContainer
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={handleSignUp}>Sign Up</Button>
        <LoginText>Already have an account? {<Link to={'/sign-in'}>Sign in</Link>}</LoginText>
      </FormWrapper>
    </SignUpTextContainer>
  );
};

export default SignUp;
