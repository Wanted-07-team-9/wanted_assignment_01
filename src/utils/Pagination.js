import React from 'react';
import styled from 'styled-components';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <PageNav>
        <PageClick onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </PageClick>
        {Array.from({ length: numPages }, (_, i) => i + 1).map((i, _) => (
          <PageNum key={i} onClick={() => setPage(i)} aria-current={page === i ? 'page' : null}>
            {i}
          </PageNum>
        ))}
        <PageClick onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </PageClick>
      </PageNav>
    </>
  );
};

export default Pagination;

const PageNav = styled.nav`
  text-align: center;
  margin: 20px 0px;
`;

const PageNum = styled.button`
  border: 1px solid #f67280;
  color: #f67280;
`;

const PageClick = styled.button`
  background: #f67280;
  color: #fff;
  border: none;
  border: 1px solid #f67280;
`;
