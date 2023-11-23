import { ContactItems, ContactsList, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactItems key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <DeleteBtn type="click" onClick={() => onDelete(contact.id)}>
            Delete
          </DeleteBtn>
        </ContactItems>
      ))}
    </ContactsList>
  );
};
