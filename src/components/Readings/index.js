// import scss
// hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';
// mock data
import { READINGS_PRESENTATION } from '../../data/readings';
// components
import ReadingsList from './ReadingsList';
// scss
import './readings.scss';
import ShowMore from '../Reusables/ShowMore';

const Readings = () => {
  // eslint-disable-next-line no-unused-vars
  // const [readingsList, setReadingsList] = useState(READINGS_LIST);
  // eslint-disable-next-line no-unused-vars
  const [readingsPresentation, setReadingPresentation] = useState(READINGS_PRESENTATION);
  const readingsList = useSelector((state) => state.userProfile.readings);

  return (
    <div className="readings">
      <h2 className="readings-title">{readingsPresentation.title}</h2>
      <button type="button" className="readings-buttonRead">{readingsPresentation.addReading}</button>
      <div className="readings-books">
        <ReadingsList readingsList={readingsList} />
      </div>
      <div className="readings-showmore">
        <ShowMore />
      </div>
    </div>
  );
};

export default Readings;
