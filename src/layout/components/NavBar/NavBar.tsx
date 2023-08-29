import React from 'react';
import { styled } from 'styled-components';

export const NavBar = () => {
    return (
        <StyledNavBar>
          <NavBarItem>
            <NavBarLink href='#'>Pofile</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href='#'>Messages</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href='#'>MainContent</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href='#'>Music</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href='#'>Settings</NavBarLink>
          </NavBarItem>
      </StyledNavBar>
    )
}


const StyledNavBar = styled.nav`
  grid-area: n;
  background-color: #92b935;
`

const NavBarItem = styled.div`
  
`

const NavBarLink = styled.a`
   text-decoration: none;
   color: white;
   &:active {
    color: gold;
   }
`