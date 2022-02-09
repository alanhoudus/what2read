/* eslint-disable max-len */
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
      <div className="home-presentation">
        <p>Premier pas dans votre lieu d'achat de livres favoris… si vous n'avez pas eu vent de la dernière trend par Tatie, une question reste en suspend : que choisir ? Et surtout : comment choisir ?</p>
        <p>Babelio saura peut-être vous en dire plus, alors vous décrochez votre smartphone : quelles sont les meilleures critiques du moment ? Votre œil est soudainement attiré par le jaune criard des étoiles, affichent une note tout à fait médiocre, supporté d'un "à éviter"… votre réflexe ? Scroller, pour trouver la perle rare aux cinq étoiles. Et ça vous prendra bien un moment avant d'en arriver là.</p>
        <p>Pourtant, pour ce qui est d'aussi subjectif que l'art, ce sont bien d'autres étoiles que l'on devrait avoir dans les yeux…</p>
        <p>What2Read propose une plateforme permettant de mettre en lien les lecteurs de tout horizon par la création et le partage de reviews personnalisées. Ici, pas l'ombre d'étoiles de notation, seulement des mots pour vous faire chavirer. Les passionnés comme vous seront vos meilleurs amis, chaque contribution étant une lumière de plus pour éclairer votre choix de lecture.</p>
      </div>
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
