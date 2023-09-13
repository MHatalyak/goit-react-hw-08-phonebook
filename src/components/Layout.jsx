import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './App.styled';
import Header from './UserMenu';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
