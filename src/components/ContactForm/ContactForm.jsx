import React, { Component } from 'react';
import { AddContact, Form, Input, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            autoFocus
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <span className="validity"></span>
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            placeholder="123-45-89"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
          />
          <span className="validity"></span>
        </Label>
        <AddContact type="submit">Add contacts</AddContact>
      </Form>
    );
  }
}
