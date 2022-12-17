import React from 'react';
import Tour from './Tour';
const Tours = ({ toursProp, reomoveTourProp }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
        <div>
          {toursProp.map((tour) => {
            return <Tour key={tour.id} {...tour} reomoveTourProp={reomoveTourProp} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
