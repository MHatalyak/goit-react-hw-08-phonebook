import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from './ContactList';
import { fetchContacts } from './contactSlice';
import ContactForm from './ContactForm';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <>
        <ContactForm />
        <ContactList />
      </>
    </div>
  );
};

export default ContactsPage;
