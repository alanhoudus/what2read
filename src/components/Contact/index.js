import Separator from '../Separator';
import './contact.scss';

const Contact = () => (
  <div className="contact">
    <h2 className="contact-title">A propos de nous</h2>
    <div className="contact-contentGroup">
      <p className="contact-content">
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Saepe iurequibusdam suscipit unde, ullam ut aliquam accusamus
      </p>
      <p className="contact-content">
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Saepe iurequibusdam suscipit unde, ullam ut aliquam accusamus
        dolor blanditiis officia. Fuga, porro odit expedita
      </p>
      <p className="contact-content">
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Saepe iurequibusdam suscipit unde, ullam ut aliquam accusamus
        dolor blanditiis officia. Fuga, porro odit expedita
      </p>
      <p className="contact-content">
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Saepe iurequibusdam suscipit unde, ullam ut aliquam accusamus
        dolor blanditiis officia. Fuga, porro odit expedita
      </p>
    </div>
    <Separator />
    <div className="contact-mailGroup">
      <h2 className="contact-title-mail">Contactez-nous :</h2>
      <div className="contact-contentGroup">what2read@gmail.com</div>
    </div>
  </div>
);

export default Contact;
