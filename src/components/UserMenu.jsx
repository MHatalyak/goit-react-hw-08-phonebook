import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteToken, logOut } from './Auth/authSlice';
import { tokenSelector, userSelector } from './Auth/authSelectors';
import {
  HeaderContainer,
  Logo,
  UserSection,
  Email,
  DeleteButton,
} from './App.styled';

function Header() {
  const user = useSelector(userSelector);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut(token));
    deleteToken(token);
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogout}>Home</Logo>

      <UserSection>
        {token ? (
          <>
            <Email>{user.email}</Email>
            <DeleteButton onClick={handleLogout}>Log Out</DeleteButton>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </UserSection>
    </HeaderContainer>
  );
}

export default Header;
