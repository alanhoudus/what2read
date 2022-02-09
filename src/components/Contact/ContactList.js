import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contactList }) => (
  // For each contact in the list, create an item
  contactList.map((contact) => (
    <ContactItem key={contact.name} contact={contact} />
  ))
);

ContactList.protoTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactList;
