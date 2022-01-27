import { Trash, Edit } from 'react-feather';
import PropTypes from 'prop-types';

const LinkItem = ({ myReview }) => (
  <div className="reviews-wrapper--singlereview">
    <img src={myReview.cover} alt="Couverture du livre" />
    <div className="reviews-wrapper--singlereview-infos">
      <h2>{myReview.title}</h2>
      <p>{myReview.description}</p>
      <div className="reviews-wrapper--singlereview-infos--buttons">
        <Trash color="red" />
        <Edit color="white" />
      </div>
    </div>
  </div>
);

LinkItem.propTypes = {
  myReview: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkItem;
