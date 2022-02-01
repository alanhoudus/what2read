// hooks
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// react-router-dom
import { useNavigate } from 'react-router-dom';

// import components
import Field from '../Reusables/Field';
import Separator from '../Reusables/Separator';

// actions
import { updateLoginValue, handleLogin } from '../../actions/user';

// import scss
import './logIn.scss';

const LogIn = () => {
  const username = useSelector((state) => state.userLogin.username);
  const password = useSelector((state) => state.userLogin.password);
  const loggingError = useSelector((state) => state.userLogin.loggingError);
  const isLogged = useSelector((state) => state.userLogin.logged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If user is logged in, redirect to the home page
  useEffect(() => {
    if (isLogged) {
      return navigate('/');
    }
  }, [isLogged]);

  return (
    <div className="logIn">
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
