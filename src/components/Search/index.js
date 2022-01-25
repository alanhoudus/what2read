// import icon
import { Search as SearchIcon } from 'react-feather';
// import components
import Field from '../Field';
// import scss
import './search.scss';

const Search = () => (
  <div className="search">
    <div className="search-input">
      <Field type="text" className="search-input--field" placeholder="Tolkien" />
      <button type="submit" className="search-input--submit">
        <SearchIcon color="white" size="20" />
      </button>
    </div>
    <div className="search-books">
      <div className="search-book">
        <a href="#">
          <h3 className="search-book--title">Lire J. R. R. Tolkien</h3>
          <img className="search-img" src="https://products-images.di-static.com/image/vincent-ferre-lire-j/9782266242912-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="search-book">
        <a href="#">
          <h3 className="search-book--title">Lettres</h3>
          <img className="search-img" src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-lettres/9782266166041-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="search-book">
        <a href="#">
          <h3 className="search-book--title">Logos et langage dans le monde de Tolkien</h3>
          <img className="search-img" src="https://products-images.di-static.com/image/verlyn-flieger-une-lumiere-eclatee/9782220066325-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="search-book">
        <a href="#">
          <h3 className="search-book--title">Lire J. R. R. Tolkien</h3>
          <img className="search-img" src="https://products-images.di-static.com/image/vincent-ferre-lire-j/9782266242912-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="search-book">
        <a href="#">
          <h3 className="search-book--title">Lettres</h3>
          <img className="search-img" src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-lettres/9782266166041-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="search-book">
        <a href="#">
          <h3 className="search-book--title">Logos et langage dans le monde de Tolkien</h3>
          <img className="search-img" src="https://products-images.di-static.com/image/verlyn-flieger-une-lumiere-eclatee/9782220066325-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="search-book">
        <a href="#">
          <h3 className="search-book--title">Lire J. R. R. Tolkien</h3>
          <img className="search-img" src="https://products-images.di-static.com/image/vincent-ferre-lire-j/9782266242912-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="search-book">
        <a href="#">
          <h3 className="search-book--title">Lettres</h3>
          <img className="search-img" src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-lettres/9782266166041-475x500-1.webp" alt="title" />
        </a>
      </div>
      <div className="search-book">
        <a href="#">
          <h3 className="search-book--title">Logos et langage dans le monde de Tolkien</h3>
          <img className="search-img" src="https://products-images.di-static.com/image/verlyn-flieger-une-lumiere-eclatee/9782220066325-475x500-1.webp" alt="title" />
        </a>
      </div>
    </div>
    <button type="button" className="search-showMore">Voir plus</button>
  </div>
);

export default Search;
