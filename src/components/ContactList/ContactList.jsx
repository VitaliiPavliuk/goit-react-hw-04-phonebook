import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactListItem, DeleteBtn } from './ContactList.styled';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => {
          return (
            <ContactListItem key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteBtn
                type="button"
                onClick={() => {
                  this.props.onDeleteContact(contact.id);
                }}
              >
                Delete
              </DeleteBtn>
            </ContactListItem>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func,
};
