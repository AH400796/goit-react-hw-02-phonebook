import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddingForm, InputLabel, Button, Input } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { name } = this.state;
    const { onSubmitForm, contacts } = this.props;

    const existingUsers = contacts.map(contact => contact.name);
    if (existingUsers.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    onSubmitForm(this.state);
    this.refreshInputs();
  };

  refreshInputs = () => {
    this.setState({ name: '', number: '' });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <AddingForm onSubmit={this.handleSubmitForm}>
        <InputLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
          />
        </InputLabel>
        <InputLabel>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputChange}
          />
        </InputLabel>
        <Button
          type="submit"
          disabled={(name !== '') & (number !== '') ? false : true}
        >
          Add contact
        </Button>
      </AddingForm>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
