import React from "react";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            value >= 1
              ? "bi bi-star-fill"
              : value >= 0.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        />
      </span>

      <span>
        <i
          className={
            value >= 2
              ? "bi bi-star-fill"
              : value >= 1.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        />
      </span>

      <span>
        <i
          className={
            value >= 3
              ? "bi bi-star-fill"
              : value >= 2.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        />
      </span>

      <span>
        <i
          className={
            value >= 4
              ? "bi bi-star-fill"
              : value >= 3.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        />
      </span>

      <span>
        <i
          className={
            value >= 5
              ? "bi bi-star-fill"
              : value >= 4.5
              ? "bi bi-star-half"
              : "bi bi-star"
          }
        />
      </span> <br />

          <span>{text && text}</span>
    </div>
  );
};

export default Rating;