import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from './Auth/authSlice';
import { fetchContacts } from './Contacts/contactSlice';
import PrivateRoute from './PrivateRoute';

const ContactPage = lazy(() => import(`./Contacts/ContactPage`));
const Register = lazy(() => import(`./Auth/Register`));
const LoginPage = lazy(() => import(`./Auth/LoginPage`));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<ContactPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
