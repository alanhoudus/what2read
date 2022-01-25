// import scss
import './readings.scss';

const Readings = () => (
  <div className="readings">
    <h2 className="readings-title">Mes lectures</h2>
    <button type="button" className="readings-buttonRead">Ajouter un livre lu</button>
    <div className="readings-books">
      <div className="reeading-book">
        <img className="search-img" src="https://products-images.di-static.com/image/suzanne-collins-hunger-games-tome-1/9782266260770-475x500-1.webp" alt="title" />
        <h3 className="readings-book title">Hunger Games</h3>
        <h4>Tome 1</h4>
        <p>Suzanne Collins</p>
      </div>
      <div className="reeading-book">
        <img className="search-img" src="https://products-images.di-static.com/image/suzanne-collins-hunger-games-tome-2-l-embrasement/9782266260787-475x500-1.webp" alt="title" />
        <h3 className="readings-book title">Hunger Games</h3>
        <h4>Tome 2 - L'embrasement</h4>
      </div>
    </div>
  </div>
);

export default Readings;
