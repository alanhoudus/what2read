// import components
import Field from '../Field';
// import scss
import './registrationForm.scss';

const RegistrationForm = () => (
  <div className="registration">
    <h2 className="registration-title">Inscription</h2>
    <div className="registration-lign" />
    <div className="registration-input">
      <h3>Pseudo<span className="registration-input--asterisk">*</span> : </h3>
      <Field type="text" className="registration-field registration-field--name" placeholder="User126" />
      <h3>Email<span className="registration-input--asterisk">*</span> : </h3>
      <Field type="text" className="registration-field" placeholder="user126@gmail.com" />
      <h3>Mot de passe<span className="registration-input--asterisk">*</span> : </h3>
      <Field type="password" name="password" className="registration-field" placeholder="*******" />
      <h3>Confirmation du mot de passe<span className="registration-input--asterisk">*</span> : </h3>
      <Field type="password" className="registration-field" placeholder="User126" />
      <h3>Ma présentation : </h3>
      <Field type="text" className="registration-field registration-field--presentation" placeholder="" />
      <button type="submit" className="registration-button">Rejoindre</button>
      <p className="registration-required">* champs obligatoires</p>
    </div>
  </div>
);

export default RegistrationForm;
