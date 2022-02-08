// == Import
// hooks
import { useSelector } from 'react-redux';
// components
import Loader from '../App/Loader';
import Separator from '../Reusables/Separator';
import Review from './Review';
import SuggestedBook from './SuggestedBook';
// scss
import './home.scss';

// == Composant
const Home = () => {
  const booksListLoading = useSelector((state) => state.books.booksListDataLoading);
  const reviewsListLoading = useSelector((state) => state.books.allReviewsDataLoading);

  return (
    <div className="home">
      <h1 className="home-title--main">What2Read </h1>
      <h2 className="home-title--secondary">Présentation du site</h2>
      <p className="home-presentation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam eget magna at risus scelerisque aliquet.
        Praesent sodales nunc nibh, vel accumsan risus tempor eget.
      </p>
      <Separator />
      {booksListLoading
        ? <Loader />
        : <SuggestedBook />}
      <Separator />
      {reviewsListLoading
        ? <Loader />
        : <Review />}
    </div>
  );
};
// == Export
export default Home;
