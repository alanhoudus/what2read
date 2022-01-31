import { Trash, Edit } from 'react-feather';
import PropTypes from 'prop-types';

const LinkItem = ({ myReview }) => (
  <div className="reviews-wrapper--singlereview">
    <img src={myReview.cover} alt="Couverture du livre" />
    <div className="reviews-wrapper--singlereview-infos">
      <h3>{myReview.title}</h3>
      <p>{myReview.description}</p>
      <div className="reviews-wrapper--singlereview-infos--buttons">
        <Edit color="white" />
        <Trash color="red" />
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
