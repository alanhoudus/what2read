import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => (
  <div className="contact-infos">
    <img src={contact.avatar} alt="avatar" className="contact-avatar" />
    <div className="contact-name">{contact.name}</div>
    <div className="contact-role">{contact.role}</div>
    <div className="contact-team">{contact.team}</div>
  </div>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
