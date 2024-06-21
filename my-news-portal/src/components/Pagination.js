import React from 'react';
import styled from 'styled-components';

// Styled Component for Pagination Container
const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  span {
    margin: 0 10px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;

    button {
      margin: 5px;
    }

    span {
      margin: 5px;
    }
  }
`;

const Pagination = ({ currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <PaginationContainer>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={handleNext}>Next</button>
    </PaginationContainer>
  );
};

export default Pagination;
