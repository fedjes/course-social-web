import React from 'react';
import { styled } from 'styled-components';


type NavBarPropsType = {

}

export const NavBar = () => {
    return (
        <StyledNavBar>
          <NavBarItem>
            <NavBarLink href='/Pofile'>Pofile</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href='/Dialogs'>Messages</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href='/News'>News</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href='/Music'>Music</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink href='/Settings'>Settings</NavBarLink>
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