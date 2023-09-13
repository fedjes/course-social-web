import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';


type NavBarPropsType = {

}

export const NavBar = () => {
  return (
    <StyledNavBar>
      <NavBarItem>
        <NavBarLink to={'/Profile'}>Profile</NavBarLink>
      </NavBarItem>
      <NavBarItem>
        <NavBarLink to={'/Dialogs'}>Messages</NavBarLink>
      </NavBarItem>
      <NavBarItem>
        <NavBarLink to={'/News'}>News</NavBarLink>
      </NavBarItem>
      <NavBarItem>
        <NavBarLink to={'/Music'}>Music</NavBarLink>
      </NavBarItem>
      <NavBarItem>
        <NavBarLink to={'/Settings'}>Settings</NavBarLink>
      </NavBarItem>
    </StyledNavBar>
  )
}


const StyledNavBar = styled.nav`
  grid-area: n;
  background-color: #92b935;
  padding: 10px;
`

const NavBarItem = styled.div`
  
`

const NavBarLink = styled(NavLink)`
   text-decoration: none;
   color: white;
   &.active {
    color: gold;
   }
`