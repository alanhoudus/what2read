// import scss
// hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useModal from '../Book/AddBook/useModal';
import AddBook from '../Book/AddBook';
// mock data
import { READINGS_PRESENTATION } from '../../data/readings';
// components
import ReadingsList from './ReadingsList';
// scss
import './readings.scss';
import ShowMore from '../Reusables/ShowMore';
import Loader from '../App/Loader';

const Readings = () => {
  // eslint-disable-next-line no-unused-vars
  // const [readingsList, setReadingsList] = useState(READINGS_LIST);
  // eslint-disable-next-line no-unused-vars
  const [readingsPresentation, setReadingPresentation] = useState(READINGS_PRESENTATION);
  const readingsList = useSelector((state) => state.userProfile.readings);
  const readingsLoading = useSelector((state) => state.userProfile.readingsLoading);

  const { isShowing: isAddBookFormShowed, toggle: toggleAddBookForm } = useModal();

  return (
    <>
      <div className="readings">
        <h2 className="readings-title">{readingsPresentation.title}</h2>
        <button type="button" className="readings-buttonRead-toggle" onClick={toggleAddBookForm}>{readingsPresentation.addReading}</button>
        <div className="readings-books">
          {readingsLoading ? <ReadingsList readingsList={readingsList} /> : <Loader />}
        </div>
        <div className="readings-showmore">
          <ShowMore />
        </div>
      </div>

      <AddBook
        isShowing={isAddBookFormShowed}
        hide={toggleAddBookForm}
        title="AddBook"
      >
        <form>
          <div className="form-group">
            <input type="text" placeholder="Ajouter un livre" />
          </div>
          <div className="form-group">
            <input type="submit" value="AddBook" />
          </div>
        </form>
      </AddBook>
    </>
  );
};

export default Readings;
