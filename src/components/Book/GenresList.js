import PropTypes from 'prop-types';
import GenreItem from './GenreItem';

const GenresList = ({ genresList }) => (
  genresList.map((genre) => (
    <GenreItem key={genre.name} genre={genre} />
  ))
);

GenresList.protoTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default GenresList;
