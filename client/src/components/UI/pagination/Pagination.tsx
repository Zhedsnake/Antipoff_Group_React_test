import React from 'react';
import classes from "./pagination.module.css";
import {useGetPagination} from "../../../hooks/useGetPagination";

const Pagination = ({totalPages, page, handlePageChange}) => {
    let pagesArray = useGetPagination(totalPages);

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
