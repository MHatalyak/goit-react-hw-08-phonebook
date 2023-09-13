import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './contactSlice';

import {
  List,
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from '../App.styled';
import Filter from './Filter';
import {
  contactsSelector,
  errorSelector,
  filterSelector,
  isLoadingSelector,
} from './contactSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <h1>Loading...</h1>} {error && <h1>{error}</h1>}{' '}
      {
        <div>
          <Filter />
        </div>
      }
      {filteredContacts && (
        <>
          <div>
            <List>
              {filteredContacts.map(contact => (
                <ListItem key={contact.id}>
                  <ContactName>{contact.name}:</ContactName>
                  <ContactNumber>{contact.number}</ContactNumber>
                  <DeleteButton
                    onClick={() => dispatch(deleteContact(contact.id))}
                  >
                    Delete
                  </DeleteButton>
                </ListItem>
              ))}
            </List>
          </div>
        </>
      )}
    </>
  );
};

export default ContactList;
