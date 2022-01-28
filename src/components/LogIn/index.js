// hooks
import { useSelector, useDispatch } from 'react-redux';

// import components
import Field from '../Field';

// actions
import { updateLoginValue, handleLogin } from '../../actions/user';

// import scss
import './logIn.scss';

const LogIn = () => {
  const email = useSelector((state) => state.userLogin.email);
  const password = useSelector((state) => state.userLogin.password);
  const dispatch = useDispatch();

  return (
    <div className="logIn">
      <h2 className="logIn-title">Se connecter</h2>
      <div className="logIn-lign" />
      <div className="logIn-input">
        <h3 className="logIn-input">Email : </h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(handleLogin());
          }}
        >
          <Field
            type="text"
            className="logIn-field logIn-field--name"
            placeholder="dupont@dupont.fr"
            value={email}
            name="email"
            id="email"
            onChange={(newValue, identifier) => {
              const actionUpdate = updateLoginValue(identifier, newValue);
              dispatch(actionUpdate);
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
          <button type="submit" className="logIn-button">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
