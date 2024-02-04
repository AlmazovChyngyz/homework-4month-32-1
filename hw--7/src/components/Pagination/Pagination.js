import React from 'react';
import classes from "./Pagination.module.css";


const Pagination = ({handleNext, page, handlePrev}) => {
  return (
    <div className={classes.pagWrap}>
      <button onClick={handlePrev}>Prev</button>
      {page}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;