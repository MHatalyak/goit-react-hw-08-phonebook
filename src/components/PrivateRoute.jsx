import { useSelector } from 'react-redux';
import { tokenSelector } from './Auth/authSelectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(tokenSelector);
  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
