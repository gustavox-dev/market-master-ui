import React from 'react';
import { StyledSidebar, StyledSidebarItem, StyledSidebarLink, StyledSidebarList, StyledSidebarTitle } from './styles';

const Sidebar: React.FC = () => {
  return (
    <StyledSidebar>
      <StyledSidebarTitle>Menu</StyledSidebarTitle>
      <StyledSidebarList>
        <StyledSidebarItem>
          <StyledSidebarLink to="/">Home</StyledSidebarLink>
        </StyledSidebarItem>
        <StyledSidebarItem>
          <StyledSidebarLink to="/categories">Categorias</StyledSidebarLink>
        </StyledSidebarItem>
        <StyledSidebarItem>
          <StyledSidebarLink to="/products">Produtos</StyledSidebarLink>
        </StyledSidebarItem>
      </StyledSidebarList>
    </StyledSidebar>
  );
};

export default Sidebar;