// react-router-dom
import { Link } from 'react-router-dom';
// hooks
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// actions
import {
  deleteUserAccount, logOut,
} from '../../actions/user';
// import scss
import './modalDeleteAccount.scss';

const ModaleDeleteAccount = ({ setIsModal }) => {
  const dispatch = useDispatch();
  return (
    <div className="modalAccount-overlayAccount">
      <div className="modalAccount-background">
        <div className="modalAccount-wrapper">
          <div className="modalAccount-content">
            <p className="modalAccount-question">Êtes vous sûre de vouloir supprimer votre compte ?</p>
            <Link
              to="/"
            >
              <button
                type="button"
                className="modalAccount-yes"
                onClick={() => {
                  dispatch(deleteUserAccount());
                  dispatch(logOut());
                }}

              >
                oui
              </button>
            </Link>
            <button
              type="button"
              className="modalAccount-no"
              onClick={() => {
                setIsModal(false);
              }}
            >
              non
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

ModaleDeleteAccount.propTypes = {
  setIsModal: PropTypes.func.isRequired,
};
export default ModaleDeleteAccount;
