// import
// components
import Separator from '../Reusables/Separator';
import ContactList from './ContactList';
// mock data
import contact from '../../data/dev';
// scss
import './contact.scss';

const Contact = () => {
  const devProfiles = contact;

  return (
    <div className="contact">
      <h2 className="contact-title">A propos de nous</h2>
      <div className="contact-contentGroup">
        <ContactList contactList={devProfiles} />
      </div>
      <Separator />
      <div className="contact-mailGroup">
        <h2 className="contact-title-mail">Contactez-nous :</h2>
        <div className="contact-contentGroup">what2read@mail.com</div>
      </div>
    </div>
  );
};
export default Contact;
