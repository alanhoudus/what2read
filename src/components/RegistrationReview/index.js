// import components
import Field from '../Field';
// import asset
import profilLogo from '../../assets/images/profileicon.png';
// import scss
import './registrationReview.scss';

const RegistrationReview = () => (
  <div className="addReview">
    <h2 className="addReview-title desktop">Formulaire d'ajout d'une review</h2>
    <h2 className="addReview-title mobile">Ecrire une review</h2>
    <img src={profilLogo} alt="profile" className="addReview-logo" />
    <div className="addReview-group">
      <img src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-le-seigneur-des-anneaux-integrale/9782266286268-475x500-1.webp" alt="titleBook" className="addReview-cover" />
      <h3 className="addReview-titleBook">Le Seigneur des Anneaux</h3>
    </div>
    <Field type="text" placeholder="Mets un titre à ta review" className="addReview-field title" />
    <Field type="text" placeholder="Texte de la review" className="addReview-field content" />
    <button type="submit" className="addReview-submit">Envoyer</button>
  </div>
);

export default RegistrationReview;
