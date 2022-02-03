// hooks
import { useSelector, useDispatch } from 'react-redux';
// react-router-dom
import { Navigate } from 'react-router-dom';
// import components
import Field from '../Reusables/Field';
import Separator from '../Reusables/Separator';
import PopUpInfo from '../Reusables/PopUpInfo';
// actions
import { updateLoginValue, handleLogin } from '../../actions/user';
// import scss
import './logIn.scss';

const LogIn = () => {
  const username = useSelector((state) => state.userLogin.username);
  const password = useSelector((state) => state.userLogin.password);
  const loggingError = useSelector((state) => state.userLogin.loggingError);
  const isLogged = useSelector((state) => state.userLogin.logged);
  const registrationSuccess = useSelector((state) => state.userRegistration.registrationSuccess);
  const message = useSelector((state) => state.userRegistration.registrationMessage);
  const dispatch = useDispatch();

  // If user is logged in, redirect to profile page
  if (isLogged) {
    return <Navigate to="/profil" />;
  }
  return (
    <div className="logIn">
      { registrationSuccess && <PopUpInfo message={message} />}
      <h2 className="logIn-title">Se connecter</h2>
      <Separator />
      <div className="logIn-input">
        <h3 className="logIn-input">Pseudo : </h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(handleLogin());
          }}
        >
          <Field
            type="text"
            className="logIn-field logIn-field--name"
            placeholder="jeanmichdu90"
            value={username}
            name="username"
            id="username"
            onChange={(newValue, identifier) => {
              const action = updateLoginValue(identifier, newValue);
              dispatch(action);
            }}
          />
          <h3 className="logIn-input">Mot de passe : </h3>
          <Field
            type="password"
            name="password"
            id="password"
            className="logIn-field"
            placeholder="*******"
            value={password}
            onChange={(newValue, identifier) => {
              const action = updateLoginValue(identifier, newValue);
              dispatch(action);
            }}
          />
          {loggingError && (
            <p className="logIn-error">Le mail ou le mot de passe est incorrect</p>
          )}
          <button type="submit" className="logIn-button">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
