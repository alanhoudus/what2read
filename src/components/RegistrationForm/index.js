import { useSelector, useDispatch } from 'react-redux';

// import components
import Field from '../Reusables/Field';
import Separator from '../Reusables/Separator';

// actions
import { updateRegistrationValue } from '../../actions/user';
// import scss
import './registrationForm.scss';

const RegistrationForm = () => {
  const nickname = useSelector((state) => state.userRegistration.nickname);
  const email = useSelector((state) => state.userRegistration.email);
  const password = useSelector((state) => state.userRegistration.password);
  const confirmationPassword = useSelector((state) => state.userRegistration.confirmationPassword);
  const description = useSelector((state) => state.userRegistration.description);

  const dispatch = useDispatch();
  return (
    <div className="registration">
      <h2 className="registration-title">Inscription</h2>
      <Separator />
      <div className="registration-input">
        <h3>Pseudo<span className="registration-input--asterisk">*</span> : </h3>
        <form>
          <Field
            type="text"
            className="registration-field registration-field"
            placeholder="User126"
            name="nickname"
            id="nickname"
            value={nickname}
            onChange={(newValue, identifier) => {
              const action = updateRegistrationValue(identifier, newValue);
              dispatch(action);
            }}
          />
          <h3>Email<span className="registration-input--asterisk">*</span> : </h3>
          <Field
            type="text"
            className="registration-field"
            placeholder="user126@gmail.com"
            name="email"
            id="email"
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
          <button type="submit" className="registration-button">Rejoindre</button>
        </form>
        <p className="registration-required">* champs obligatoires</p>
      </div>
    </div>
  );
};

export default RegistrationForm;
