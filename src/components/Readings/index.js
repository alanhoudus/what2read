// import scss
// hooks
import { useState } from 'react';
// mock data
import { READINGS_LIST, READINGS_PRESENTATION } from '../../data/readings';
// components
import ReadingsList from './ReadingsList';
// scss
import './readings.scss';

const Readings = () => {
  // eslint-disable-next-line no-unused-vars
  const [readingsList, setReadingsList] = useState(READINGS_LIST);
  // eslint-disable-next-line no-unused-vars
  const [readingsPresentation, setReadingPresentation] = useState(READINGS_PRESENTATION);

  return (
    <div className="readings">
      <h2 className="readings-title">{readingsPresentation.title}</h2>
      <button type="button" className="readings-buttonRead">{readingsPresentation.addReading}</button>
      <div className="readings-books">
        <ReadingsList readingsList={readingsList} />
      </div>
      <button type="button" className="readings-showmore">Voir plus</button>
    </div>
  );
};

export default Readings;
