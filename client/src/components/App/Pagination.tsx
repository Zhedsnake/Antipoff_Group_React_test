import React from 'react';

const Pagination: React.FC<{ handlePageChange: (page: number) => void }> = ({ handlePageChange }) => {
  return (
    <div className="app__pagination pagination">
      <button className="pagination__button" onClick={() => handlePageChange(1)}>1</button>
      <button className="pagination__button" onClick={() => handlePageChange(2)}>2</button>
    </div>
  );
};

export default Pagination;
