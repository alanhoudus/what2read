// == Import
import Separator from '../Separator';
import './home.scss';
import Review from './Review';
import SuggestedBook from './SuggestedBook';

// == Composant
const Home = () => (
  <div className="home">
    <h1 className="home-title">What2Read </h1>
    <h2 className="home-title">Présentation du site</h2>
    <p className="home-presentation">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam eget magna at risus scelerisque aliquet.
      Praesent sodales nunc nibh, vel accumsan risus tempor eget.
    </p>
    <Separator />
    <SuggestedBook />
    <Separator />
    <Review />
  </div>
);

// == Export
export default Home;
