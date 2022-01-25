// import scss
import './readings.scss';

const Readings = () => (
  <div className="readings">
    <h2 className="readings-title">Mes lectures</h2>
    <button type="button" className="readings-buttonRead">Ajouter un livre lu</button>
    <div className="readings-books">
      <div className="readings-book">
        <a href="#">
          <h3 className="readings-book--title">Hunger Games</h3>
          <h4 className="readings-book--subtitle">Tome 1</h4>
          <img className="search-img" src="https://products-images.di-static.com/image/suzanne-collins-hunger-games-tome-1/9782266260770-475x500-1.webp" alt="title" />
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
    </div>
    <button type="button" className="search-showMore">Voir plus</button>
  </div>
);

export default Readings;
