import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactFormSt, AddBtn } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.trim(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onAddContact(contact);

    e.currentTarget.reset();
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <ContactFormSt onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <AddBtn type="submit">Add contact</AddBtn>
      </ContactFormSt>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = { onAddContact: PropTypes.func };
