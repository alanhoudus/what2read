import PropTypes from 'prop-types';
import ReadingItem from './ReadingItem';

const ReadingsList = ({ readingsList }) => (
  readingsList.map((reading) => (
    <ReadingItem key={reading.cover} reading={reading} />
  ))
);

ReadingsList.propTypes = {
  readingsList: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReadingsList;
