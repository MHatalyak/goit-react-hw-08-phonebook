import { useSelector } from 'react-redux';
import { tokenSelector } from 'components/Auth/authSelectors';
import { useNavigate } from 'react-router-dom';
import LoginPage from 'components/Auth/LoginPage';
import ContactsPage from './ContactsPage';

const ContactPage = () => {
  const isAuth = useSelector(tokenSelector);
  const navigate = useNavigate();

  return (
    <div>
      {isAuth ? (
        <>
          <ContactsPage />
        </>
      ) : (
        <>
          <LoginPage />
          {navigate('/login')}
        </>
      )}
    </div>
  );
};

export default ContactPage;
