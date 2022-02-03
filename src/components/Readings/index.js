// import scss
// hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// react-router-dom
import { Navigate } from 'react-router-dom';
// components
import AddReading from './AddReading';
// mock data
import { READINGS_PRESENTATION } from '../../data/readings';
// action
import { togglePopUp } from '../../actions/user';
// components
import ReadingsList from './ReadingsList';
// scss
import './readings.scss';
import ShowMore from '../Reusables/ShowMore';
import Loader from '../App/Loader';

const Readings = () => {
  // eslint-disable-next-line no-unused-vars
  const [readingsPresentation, setReadingPresentation] = useState(READINGS_PRESENTATION);
  const readingsList = useSelector((state) => state.userProfile.readings);
  const readingsLoading = useSelector((state) => state.userProfile.readingsLoading);
  const displayPopUp = useSelector((state) => state.userProfile.addBookPopUp);
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.userLogin.logged);

  // If user isn't logged in, redirect to the login
  if (!isLogged) {
    return <Navigate to="/connection" />;
  }
  return (
    <>
      <div className="readings">
        <h2 className="readings-title">{readingsPresentation.title}</h2>
        <button
          type="button"
          className="readings-buttonRead-toggle"
          onClick={() => {
            dispatch(togglePopUp(true));
          }}
        >
          {readingsPresentation.addReading}
        </button>
        <div className="readings-books">
          {readingsLoading ? <ReadingsList readingsList={readingsList} /> : <Loader />}
        </div>
        <div className="readings-showmore">
          <ShowMore />
        </div>
      </div>

      { displayPopUp && <AddReading /> }
    </>
  );
};

export default Readings;
