import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  width: 800px;
  /* height: 100vh; */
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px; 
`;

export const ProductName = styled.h2`
  margin: 0; 
`;

export const ProductDescription = styled.p`
  font-weight: bold;
  margin-bottom: 4px; 
`;

export const ProductDetails = styled.p`
  margin-bottom: 4px; 
`;

export const ProductCategoryList = styled.ul`
  margin: 0; 
  padding: 0; 
  list-style: none;
`;

export const ProductCategoryItem = styled.li`
  margin-bottom: 4px; /* Added margin for spacing */
`;

export const ProductContent = styled.div`

`;