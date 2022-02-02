// import scss
// hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import useModal from '../Book/AddBook/useModal';
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
