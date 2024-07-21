import React from 'react';
import classes from "./pagination.module.css";

const Pagination = ({totalPages, page, handlePageChange}) => {
    let pagesArray = getPagesArray(totalPages);

  return (
    <div className={classes.page__wrapper}>
        {pagesArray.map(p =>
            <span
                onClick={() => handlePageChange(p)}
                key={p}
                className={page === p ? `${classes.page} ${classes.page__current}` : `${classes.page}`}
            >
                {p}
            </span>
        )}
    </div>
  );
};

export default Pagination;
