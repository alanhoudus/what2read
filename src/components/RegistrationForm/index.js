import { useSelector, useDispatch } from 'react-redux';

// import components
import Field from '../Field';

// actions
import { updateLoginValue } from '../../actions/user';
// import scss
import './registrationForm.scss';

const RegistrationForm = () => {
  const nickname = useSelector((state) => state.user.nickname);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const confirmationPassword = useSelector((state) => state.user.confirmationPassword);
  const description = useSelector((state) => state.user.description);

  const dispatch = useDispatch();
  return (
    <div className="registration">
      <h2 className="registration-title">Inscription</h2>
      <div className="registration-lign" />
      <div className="registration-input">
        <h3>Pseudo<span className="registration-input--asterisk">*</span> : </h3>
        <form>
          <Field
            type="text"
            className="registration-field registration-field--name"
            placeholder="User126"
            name="nickname"
            value={nickname}
            onChange={(newValue) => {
              const action = updateLoginValue('nickname', newValue);
              dispatch(action);
            }}
          />
          <h3>Email<span className="registration-input--asterisk">*</span> : </h3>
          <Field
            type="text"
            className="registration-field"
            placeholder="user126@gmail.com"
            name="email"
            value={email}
            onChange={(newValue) => {
              const action = updateLoginValue('email', newValue);
              dispatch(action);
            }}
          />
          <h3>Mot de passe<span className="registration-input--asterisk">*</span> : </h3>
          <Field
            type="password"
            name="password"
            className="registration-field"
            placeholder="*******"
            value={password}
            onChange={(newValue) => {
              const action = updateLoginValue('password', newValue);
              dispatch(action);
            }}
          />
          <h3>Confirmation du mot de passe<span className="registration-input--asterisk">*</span> : </h3>
          <Field
            type="password"
            className="registration-field"
            placeholder="********"
            name="confirmationPassword"
            value={confirmationPassword}
            onChange={(newValue) => {
              const action = updateLoginValue('confirmationPassword', newValue);
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
            value={description}
            onChange={(newValue) => {
              const action = updateLoginValue('description', newValue);
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
