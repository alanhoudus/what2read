// hooks
import { useSelector, useDispatch } from 'react-redux';
// react-router-dom
import { Navigate } from 'react-router-dom';
// import components
import Field from '../Reusables/Field';
import Separator from '../Reusables/Separator';
// actions
import {
  handleRegistration,
  registrationError,
  updateRegistrationValue,
} from '../../actions/user';
// import scss
import './registrationForm.scss';
// selectors
import comparePasswords from '../../selectors/registration';

const RegistrationForm = () => {
  const username = useSelector((state) => state.userRegistration.username);
  const email = useSelector((state) => state.userRegistration.email);
  const password = useSelector((state) => state.userRegistration.password);
  const confirmationPassword = useSelector((state) => state.userRegistration.confirmationPassword);
  const description = useSelector((state) => state.userRegistration.description);
  // eslint-disable-next-line max-len
  const passwordRegistrationError = useSelector((state) => state.userRegistration.registrationError);
  const registrationSuccess = useSelector((state) => state.userRegistration.registrationSuccess);
  // console.log(registrationSuccess);

  const dispatch = useDispatch();

  // If user isn't logged in, redirect to the login
  if (registrationSuccess) {
    return <Navigate to="/connection" />;
  }
  return (
    <div className="registration">
      <h2 className="registration-title">Inscription</h2>
      <Separator />
      <div className="registration-input">
        <h3>Pseudo<span className="registration-input--asterisk">*</span> : </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (comparePasswords(password, confirmationPassword)) {
              dispatch(handleRegistration());
            }
            else {
              dispatch(registrationError());
            }
          }}
        >
          <Field
            type="text"
            className="registration-field registration-field"
            placeholder="User126"
            name="username"
            id="username"
            minLength="4"
            required="required"
            value={username}
            onChange={(newValue, identifier) => {
              const action = updateRegistrationValue(identifier, newValue);
              dispatch(action);
            }}
          />
          <h3>Email<span className="registration-input--asterisk">*</span> : </h3>
          <Field
            type="email"
            className="registration-field"
            placeholder="user126@gmail.com"
            name="email"
            id="email"
            required="required"
            value={email}
            onChange={(newValue, identifier) => {
              const action = updateRegistrationValue(identifier, newValue);
              dispatch(action);
            }}
          />
          <h3>Mot de passe<span className="registration-input--asterisk">*</span> : </h3>
          <Field
            type="password"
            name="password"
            id="*******"
            className="registration-field"
            placeholder="*******"
            minLength="5"
            required="required"
            value={password}
            onChange={(newValue, identifier) => {
              const action = updateRegistrationValue(identifier, newValue);
              dispatch(action);
            }}
          />
          <h3>Confirmation du mot de passe<span className="registration-input--asterisk">*</span> : </h3>
          <Field
            type="password"
            className="registration-field"
            placeholder="********"
            name="confirmationPassword"
            id="confirmationPassword"
            minLength="5"
            required="required"
            value={confirmationPassword}
            onChange={(newValue, identifier) => {
              const action = updateRegistrationValue(identifier, newValue);
              dispatch(action);
            }}
          />
          <h3>Ma présentation : </h3>
          <Field
            type="text"
            className="registration-field
            registration-field--presentation"
            placeholder=""
            name="description"
            id="description"
            value={description}
            onChange={(newValue, identifier) => {
              const action = updateRegistrationValue(identifier, newValue);
              dispatch(action);
            }}
          />
          { passwordRegistrationError
          && <p className="registration-error password">Les deux mots de passe ne correspondent pas</p>}
          <button type="submit" className="registration-button">Rejoindre</button>
        </form>
        <p className="registration-required">* champs obligatoires</p>
      </div>
    </div>
  );
};

export default RegistrationForm;
