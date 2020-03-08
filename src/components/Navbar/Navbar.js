import React from "react";
import styled from "styled-components";
import { NavLink, Link, useHistory } from "react-router-dom";

import Container from "../../styles/Container";
import { Button } from "@smooth-ui/core-sc";

import logo from "../../assets/dojo-logo.png";
import { FaUserCircle } from "react-icons/fa";

// Main divs
const StyledNav = styled.nav`
   background: white;
   border-radius: 0 0 7px 7px;
   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);

   overflow: hidden;

   background-color: ${({ theme }) => theme.colors.background};

   position: fixed; /* Set the navbar to fixed position */
   z-index: 1000;
   top: 0; /* Position the navbar at the top of the page */

   width: 100%; /* Full width */

   display: flex;
   justify-content: center;
`;

const NavContainer = styled(Container)`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;

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

   letter-spacing: 0.08rem;
   font-size: 1.1rem;

   * {
      margin: 0;
   }

   img {
      height: 30px;
      padding: 0 7px 0 0;
      border-right: 1px solid;
      border-color: ${({ theme }) => `${theme.colors.dark}50`};
   }

   h2 {
      color: ${({ theme }) => theme.colors.secondary};
      margin: 0 7px;
   }

   span {
      color: ${({ theme }) => theme.colors.dark};
   }
`;

// Account buttons, login/register (on right)
const UserProfile = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
`;

const ProfileIcon = styled(FaUserCircle)`
   font-size: 2.5rem;
   color: ${({ theme }) => theme.colors.secondary};

   &:hover {
      cursor: pointer;
   }
`;

const LogOutButton = styled(Button)`
   margin: 0 10px;
   padding: 0 1rem;
   height: 35px;

   border: none;
`;

const NavBar = ({ loggedIn }) => {
   const history = useHistory();
   const logOut = () => {
      localStorage.removeItem("AUTH_TOKEN");
      history.push("");
   };

   return (
      <StyledNav>
         <NavContainer>
            <LogoLink to="/tasks">
               <img src={logo} alt="Dragon with multiple colors" />
               <h2>
                  <span>task</span>dōjō
               </h2>
            </LogoLink>
            <UserProfile>
               {loggedIn && (
                  <LogOutButton outline variant="secondary" onClick={logOut}>
                     Log Out
                  </LogOutButton>
               )}

               <Link to="/profile">
                  <ProfileIcon />
               </Link>
            </UserProfile>
         </NavContainer>
      </StyledNav>
   );
};

export default NavBar;
