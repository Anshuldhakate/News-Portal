import React from 'react';
import styled from 'styled-components';

const CategoryFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CategoryButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  margin: 0 10px 10px 0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    flex-basis: 45%;
  }

  @media (max-width: 480px) {
    flex-basis: 100%; 
    margin-right: 0;
  }
`;

const categories = ['Business', 'Technology', 'Entertainment', 'Health', 'Science', 'Sports'];

const CategoryFilter = ({ onCategoryChange }) => {
  return (
    <CategoryFilterContainer>
      {categories.map((category) => (
        <CategoryButton key={category} onClick={() => onCategoryChange(category)}>
          {category}
        </CategoryButton>
      ))}
    </CategoryFilterContainer>
  );
};

export default CategoryFilter;
