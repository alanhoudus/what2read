// import scss
// hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// react-router-dom
import { Navigate } from 'react-router-dom';
// components
import AddReading from './AddReading';
// mock data
import { READINGS_PRESENTATION } from '../../data/readings';
// action
import {
  getUserReadingsData,
  togglePopUp,
} from '../../actions/user';
// components
import ReadingsList from './ReadingsList';
// scss
import './readings.scss';
import Loader from '../App/Loader';

const Readings = () => {
  // eslint-disable-next-line no-unused-vars
  const [readingsPresentation, setReadingPresentation] = useState(READINGS_PRESENTATION);
  const readingsList = useSelector((state) => state.userProfile.readings);
  const readingsLoading = useSelector((state) => state.userProfile.readingsLoading);
  const displayPopUp = useSelector((state) => state.userProfile.addBookPopUp);
  const token = useSelector((state) => state.userProfile.token);
  const isLogged = useSelector((state) => state.userProfile.logged);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserReadingsData());
    }
  }, [token]);

  useEffect(() => {
    dispatch(getUserReadingsData());
  }, [displayPopUp]);

  // If user isn't logged in, redirect to the login
  if (!isLogged) {
    return <Navigate to="/connection" />;
  }
  if (readingsLoading) {
    return <Loader />;
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
          {readingsList.length === 0
            ? <p>Vous n'avez pas encore ajouté de lectures</p>
            : <ReadingsList readingsList={readingsList} />}
        </div>
      </div>

      { displayPopUp && <AddReading /> }
    </>
  );
};

export default Readings;
