import PropTypes from 'prop-types';

const GenreItem = ({ genre }) => (
  <span className={`book-content tag-${genre.name}`}>
    {genre.name}
  </span>
);

GenreItem.propTypes = {
  genre: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default GenreItem;
