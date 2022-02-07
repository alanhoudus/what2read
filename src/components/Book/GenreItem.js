import PropTypes from 'prop-types';

const GenreItem = ({ genre }) => (
  <span className={`book-content tag genre-${genre.id}`}>
    {genre.name}
  </span>
);

GenreItem.propTypes = {
  genre: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default GenreItem;
