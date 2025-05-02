import React from 'react';

const Results = ({ speed, accuracy }) => {
  return (
    <div className="results">
      <h2>Results</h2>
      <p>Your typing speed: <strong>{speed} WPM</strong></p>
      <p>Your accuracy: <strong>{accuracy}%</strong></p>
    </div>
  );
};

export default Results;