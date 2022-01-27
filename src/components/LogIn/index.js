// hooks
import { useSelector, useDispatch } from 'react-redux';

// import components
import Field from '../Field';

// actions
import { updateLoginValue, handleLogin } from '../../actions/user';

// import scss
import './logIn.scss';

const LogIn = () => {
  const nickname = useSelector((state) => state.user.nickname);
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();

  return (
    <div className="logIn">
      <h2 className="logIn-title">Se connecter</h2>
      <div className="logIn-lign" />
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
            placeholder="User126"
            value={nickname}
            name="nickname"
            onChange={(newValue) => {
              const action = updateLoginValue('nickname', newValue);
              dispatch(action);
            }}
          />
          <h3 className="logIn-input">Mot de passe : </h3>
          <Field
            type="password"
            name="password"
            className="logIn-field"
            placeholder="*******"
            value={password}
            onChange={(newValue) => {
              const action = updateLoginValue('password', newValue);
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
