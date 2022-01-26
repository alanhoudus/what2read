// import components
import Field from '../Field';

// import scss
import './logIn.scss';

const LogIn = () => (
  <div className="logIn">
    <h2 className="logIn-title">Se connecter</h2>
    <div className="logIn-lign" />
    <div className="logIn-input">
      <h3 className="logIn-input">Pseudo : </h3>
      <Field type="text" className="logIn-field logIn-field--name" placeholder="User126" />
      <h3 className="logIn-input">Mot de passe : </h3>
      <Field type="password" name="password" className="logIn-field" placeholder="*******" />
      <button type="submit" className="logIn-button">Se connecter</button>
    </div>
  </div>
);

export default LogIn;
