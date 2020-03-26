import React from 'react';
import styled from 'styled-components';

const CategoryList = ({ questions, categories }) => (
  <ul>
    {categories.map(category => {
      const filteredByCategory = questions.filter(
        question => question.category == category
      );

      return (
        <li>
          {category} {filteredByCategory.length}
        </li>
      );
    })}
  </ul>
);

export default CategoryList;
