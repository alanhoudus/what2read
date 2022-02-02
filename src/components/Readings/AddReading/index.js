// Import
// hooks
import { useDispatch } from 'react-redux';
// actions
import { togglePopUp } from '../../../actions/user';
// components
import Field from '../../Reusables/Field';
// scss
import './addReading.scss';

const AddReading = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <h3>Ajouter un livre</h3>
        <Field />
        <button
          type="button"
          className="modal-close-button"
          onClick={() => {
            dispatch(togglePopUp(false));
          }}
        >
          <span>&times;</span>
        </button>
      </div>
    </div>
  );
};

export default AddReading;
