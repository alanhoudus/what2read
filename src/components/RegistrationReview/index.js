// import components
import Field from '../Field';
import TextArea from '../TextArea';
// import asset
// import profilLogo from '../../assets/images/profileicon.png';
// import scss
import './registrationReview.scss';

const RegistrationReview = () => (

  <div className="addReview">
    <h2 className="addReview-title">Ecrit une review</h2>
    <form className="addReview-form">
      <div className="addReview-form book">
        <img src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-le-seigneur-des-anneaux-integrale/9782266286268-475x500-1.webp" alt="titleBook" className="addReview-cover" />
        <h3 className="addReview-form titleBook">Le Seigneur des Anneaux</h3>
      </div>
      <Field id="title" type="text" placeholder="Mets un titre à ta review" className="addReview-field title" />
      <div className="addReview-jumbotron">
        <img src="https://products-images.di-static.com/image/john-ronald-reuel-tolkien-le-seigneur-des-anneaux-integrale/9782266286268-475x500-1.webp" alt="titleBook" className="addReview-cover" />
        <TextArea placeholder="Texte de la review" className="addReview-field content" />
      </div>
      <button type="submit" className="addReview-submit">Envoyer</button>
    </form>
  </div>
);

export default RegistrationReview;
