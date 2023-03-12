import PropTypes from 'prop-types';
import { ContactListItem, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteBtn
              type="button"
              onClick={() => {
                onDeleteContact(contact.id);
              }}
            >
              Delete
            </DeleteBtn>
          </ContactListItem>
        );
      })}
    </ul>
  );
};

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
