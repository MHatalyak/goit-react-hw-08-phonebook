import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginUser, refreshUser } from './authSlice';
import { tokenSelector } from './authSelectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(tokenSelector);
  const navigate = useNavigate();

  const login = body => {
    dispatch(loginUser(body));
  };

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Login login={login} />
    </>
  );
};

export default LoginPage;
