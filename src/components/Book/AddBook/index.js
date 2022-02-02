// Import
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// import './addBook.scss';

const AddBook = ({
  isShowing,
  hide,
  title,
  ...props
}) => {
console.log ('');
  return (
    isShowing
      ? ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h3>{title}</h3>
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">{props.children}</div>
            </div>
          </div>
        </div>,
      )
      : null
  );
};

AddBook.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
export default AddBook;
