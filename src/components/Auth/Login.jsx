import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { errorSelector } from './authSelectors';

import {
  Container,
  RegisterButton,
  Label,
  Input,
  Form,
  Title,
} from 'components/App.styled';

function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(errorSelector);

  const handleSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <Container>
      <div>
        {error && <h4>{error}</h4>}
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              required
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              required
            />
          </div>
          <RegisterButton type="submit">Login</RegisterButton>
        </Form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </Container>
  );
}

export default Login;
