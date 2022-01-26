// import scss
import './readings.scss';
import { Star } from 'react-feather';
import FileText from 'react-feather';

const Readings = () => (
  <div className="readings">
    <h2 className="readings-title">Mes lectures</h2>
    <button type="button" className="readings-buttonRead">Ajouter un livre lu</button>
    <div className="readings-books">
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">Hunger Games</h3>
          <h4 className="readings-book--subtitle">Tome 1</h4>
          <img className="search-img" src="https://products-images.di-static.com/image/suzanne-collins-hunger-games-tome-1/9782266260770-475x500-1.webp" alt="title" /><Star className="readings favorited" color="#ffff00" />
        </a>
      </div>
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">Hunger Games</h3>
          <h4 className="readings-book--subtitle">Tome 2 - L'embrasement</h4>
          <img className="search-img" src="https://products-images.di-static.com/image/suzanne-collins-hunger-games-tome-2-l-embrasement/9782266260787-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">Hunger Games</h3>
          <h4 className="readings-book--subtitle">Tome 3 - La révolte</h4>
          <img className="search-img" src="https://products-images.di-static.com/image/suzanne-collins-hunger-games-tome-3-la-revolte/9782266260794-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">Chroniques lunaires</h3>
          <h4 className="readings-book--subtitle">Tome 1 - Cinder</h4>
          <img className="search-img" src="https://products-images.di-static.com/image/marissa-meyer-chroniques-lunaires-tome-1-cinder/9782266274654-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">Chroniques lunaire</h3>
          <h4 className="readings-book--subtitle">Tome 2 - Scarlet</h4>
          <img className="search-img" src="https://products-images.di-static.com/image/marissa-meyer-chroniques-lunaires-tome-2-scarlet/9782266274661-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">La débusqueuse de mondes</h3>
          <h4 className="readings-book--subtitle"></h4>
          <img className="search-img" src="https://products-images.di-static.com/image/luce-basseterre-la-debusqueuse-de-mondes/9782253820161-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">Le Seigneur des Anneaux</h3>
          <h4 className="readings-book--subtitle">Intégrale</h4>
          <img className="search-img" src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-le-seigneur-des-anneaux-integrale/9782266286268-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">Le Livre des Étoiles</h3>
          <h4 className="readings-book--subtitle">Tome 1 - Qadehar le Sorcier</h4>
          <img className="search-img" src="https://products-images.di-static.com/image/erik-l-homme-le-livre-des-etoiles-tome-1-qadehar-le-sorcier/9782075085755-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">Le Livre des Étoiles</h3>
          <h4 className="readings-book--subtitle">Tome 2 - Le Seigneur de Sha</h4>
          <img className="search-img" src="https://products-images.di-static.com/image/erik-l-homme-le-livre-des-etoiles-tome-2-le-seigneur-sha/9782075094672-475x500-1.webp" alt="title" />
        </a>
      </div>
    </div>
    <button type="button" className="search-showMore">Voir plus</button>
  </div>
);

export default Readings;
