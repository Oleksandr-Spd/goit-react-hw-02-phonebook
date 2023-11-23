import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';
import { NoContactsMessage } from './NoContactMessage/NoContactMessage';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmitHandler = data => {
    const existingContact = this.state.contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === data.name.toLowerCase().trim()
    );

    if (existingContact) {
      Notiflix.Notify.warning(`${data.name} is already in the contacts.`);
      return;
    }

    this.addContacts(data);
    console.log(data);
    Notiflix.Notify.success(
      `${data.name} has been successfully added to the contact book.`
    );
  };

  addContacts = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
    console.log(contactID);
    Notiflix.Notify.failure(`Contact has been deleted from your contacts`);
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          gap: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        {visibleContacts.length === 0 ? (
          <NoContactsMessage />
        ) : (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
