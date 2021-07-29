import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
// npm i lodash@4.17.0

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a onClick={() => onPageChange(page)} className="page-link">
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.prototype = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
{
  /* <div>
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link"></a>
      </li>
    </ul>
  </nav>
</div>; */
}
