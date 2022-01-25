import './book.scss';
import profileicon from '../../assets/images/profileicon.png';

const Book = () => (
  <div>
    <div className="book">
      <img alt="profileicon" src={profileicon} className="book profile-logo" />
      <div className="book-contentGroup">
        <h2 className="book-content title">Titre du livre</h2>
        <div className="book-content description">
          <img alt="book-cover" src="https://products-images.di-static.com/image/vincent-ferre-lire-j/9782266242912-475x500-1.webp" className="book-content cover" />
          <div className="book-content infos">
            <div className="book-content infos-subtitle">Sous-titre :</div>
            <div className="book-content infos-author">Auteur :</div>
            <div className="book-content infos-date">Date de parution :</div>
            <div className="book-content infos-editor">Edition :</div>
            <div className="book-content infos-isbn">IBSN :</div>
            <div className="book-content infos-nbpages">Nombre de pages :</div>
            <div className="book-content infos">
              <span className="book-content tag-genre-a">genre A
              </span>
              <span className="book-content tag-genre-b">genre B
              </span>
            </div>
          </div>
          <div className="book-content summary">Comment Tolkien aurait-il jugé les adaptations cinématographiques de son oeuvre ? Pourquoi le roi Arthur est-il caché au coeur de son univers fictionnel ? Qui a écrit Le Seigneur des Anneaux, dont l'histoire se déroule... avant même l'invention de l'écriture ? Turin est-il le frère de Tristan ? Que lire de Tolkien, lorsque l'on a aimé Le Hobbit et Le Seigneur des Anneaux ? Pourquoi a-t-il marqué si durablement J.K. Rowling et G.R.R. Martin ? Ce livre propose quelques clés pour comprendre la création de la Terre du Milieu -dont l'imaginaire s'appuie sur une connaissance parfaite de textes médiévaux-, mais aussi pour mieux apprécier la fantasy moderne, qui doit tant à Tolkien ! Une invitation, faite à tous, amateurs ou non, de lire J.R.R. Tolkien.
          </div>
          <div className="book-lign" />
        </div>
      </div>
    </div>
  </div>
);

export default Book;
