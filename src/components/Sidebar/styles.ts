import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SidebarProps {}

export const StyledSidebar = styled.div<SidebarProps>`
  position: fixed; // Make the sidebar fixed
  height: 100vh; // Set height to 100% of viewport height
  width: 200px;
  background-color: #f0f0f0;
  top: 0; // Position the sidebar at the top
  left: 0; // Position the sidebar on the left
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 10%;
`;

export const StyledSidebarTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
`;

export const StyledSidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledSidebarItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledSidebarLink = styled(Link)`
  text-decoration: none;
  color: #666;
  font-size: 16px;

  &:hover {
    color: #000;
  }
`;