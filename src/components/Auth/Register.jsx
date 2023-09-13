import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser, registerUser } from './authSlice';
import { errorSelector, tokenSelector } from './authSelectors';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Label,
  Input,
  RegisterButton,
  Title,
} from 'components/App.styled';

function Register() {
  const isAuth = useSelector(tokenSelector);
  const error = useSelector(errorSelector);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };
  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Container>
      <div>
        {error && <h4>{error}</h4>}
        <Title>Sign up</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
              required
            />
          </div>
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
          <RegisterButton type="submit">Register</RegisterButton>
          <Link to="/login">Back to login</Link>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
