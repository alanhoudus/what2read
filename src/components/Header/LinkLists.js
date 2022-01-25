import PropTypes from 'prop-types';
import LinkItem from './LinkItem';

const LinkLists = ({ list }) => (
  list.map((link) => (
    <LinkItem key={link.key} link={link} />
  ))
);

LinkLists.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default LinkLists;
