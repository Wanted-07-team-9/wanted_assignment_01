import React from 'react';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <nav>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array.from({ length: numPages }, (_, i) => i + 1).map((i, _) => (
          <button key={i} onClick={() => setPage(i)} aria-current={page === i ? 'page' : null}>
            {i}
          </button>
        ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages || numPages === 0}>
          &gt;
        </button>
      </nav>
    </>
  );
};

export default Pagination;
