import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Container from "../../styles/Container";

import { FaUserCircle } from "react-icons/fa";

// Main divs
const StyledNav = styled.nav`
   background: white;
   border-radius: 0 0 7px 7px;
   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);

   overflow: hidden;

   position: fixed; /* Set the navbar to fixed position */
   z-index: 1000;
   top: 0; /* Position the navbar at the top of the page */

   width: 100%; /* Full width */
`;

const NavContainer = styled(Container)`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;

   margin: 0 auto;

   justify-content: space-between;
   align-items: center;

   height: 65px;
`;

// Logo (on left)
const LogoLink = styled(NavLink)`
   width: 20%;
   display: flex;
   align-items: center;
   justify-content: flex-start;

   text-decoration: none;
   color: black;

   letter-spacing: 0.08rem;
   font-size: 1.1rem;

   * {
      margin: 0;
   }

   span {
      color: ${({ theme }) => theme.colors.secondaryDark};
   }
`;

// Account buttons, login/register (on right)
const UserProfile = styled.div`
   justify-self: flex-end;
   width: 20%;

   display: flex;
   justify-content: flex-end;
`;

const ProfileIcon = styled(FaUserCircle)`
   font-size: 2rem;
   color: ${({ theme }) => theme.colors.primary};

   &:hover {
      cursor: pointer;
   }
`;

const NavBar = () => {
   return (
      <StyledNav>
         <NavContainer>
            <LogoLink to="/tasks">
               <h2>
                  Wunderlist<span>7</span>
               </h2>
            </LogoLink>
            <UserProfile>
               <ProfileIcon />
            </UserProfile>
         </NavContainer>
      </StyledNav>
   );
};

export default NavBar;
