import React from 'react';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.map(contact => {
        const { name, id, number } = contact;
        return (
          <ContactListItem
            key={id}
            userId={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </List>
  );
}
