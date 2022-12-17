import React, { useState } from 'react';

const Tour = ({ id, name, price, image, info, reomoveTourProp }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4 className="footer-text">{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p className="footer-text">
          {readMore ? info : `${info.substring(0, 200)}...`}{" "}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "read less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => reomoveTourProp(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
