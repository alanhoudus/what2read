import { Star, FileText } from 'react-feather';
import PropTypes from 'prop-types';

const ReadingItem = ({ reading }) => (
  <div className="readings-book">
    <a href="#">
      <div className="readings-book--cover">
        <img className="readings-book--cover-img" src={reading.cover} alt="title" />
        <Star className="readings favorited true" color="gold" />
        <FileText className="readings review-done" color="green" />
      </div>
      <h3 className="readings-book--title">{reading.title}</h3>
      <h4 className="readings-book--subtitle">{reading.subtitle}</h4>
    </a>
  </div>
);

ReadingItem.propTypes = {
  reading: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReadingItem;
