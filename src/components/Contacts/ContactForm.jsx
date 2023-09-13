import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './contactSlice';
import { Form, Label, Input, Button, Title } from '../App.styled';
import { contactsSelector } from './contactSelectors';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const [contact, setContact] = useState({ name: '', number: '' });

  console.log(contacts);
  const handleChange = event => {
    const { name, value } = event.target;
    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const existingContact = contacts.find(
        c => c.name.toLowerCase() === contact.name.toLowerCase()
      );

      if (existingContact) {
        alert(`${contact.name} already exists`);
      } else {
        const newContact = { ...contact, id: nanoid() };
        dispatch(addContact(newContact));
        setContact({ name: '', number: '' });
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <>
      <Title>Contacts</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces."
            required
          />
        </Label>
        <br />
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            value={contact.number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <br />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

export default ContactForm;
