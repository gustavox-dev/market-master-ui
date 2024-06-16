import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 800px;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px; 
`;

export const CategoryName = styled.h2`
  margin: 0; 
`;

export const CategoryDescription = styled.p`
  font-weight: bold;
  margin-bottom: 4px; 
`;
