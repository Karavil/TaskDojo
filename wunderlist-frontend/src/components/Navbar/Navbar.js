import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { Text, Button } from "@smooth-ui/core-sc";

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

const NavContainer = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;

   width: 80%;
   margin: 0 auto;

   justify-content: space-between;
   align-items: center;

   height: 70px;
`;

// Logo (on left)
const LogoLink = styled(NavLink)`
   width: 20%;
   display: flex;
   align-items: center;
   justify-content: flex-start;

   text-decoration: none;
   color: black;

   * {
      margin: 0;
   }

   img {
      height: 35px;
      border-radius: 10px;
      margin-right: 15px;
   }
`;

// Links (in the middle)
const Links = styled.div`
   font-size: 1.05rem;

   display: flex;
   justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
   color: black;
   text-decoration: none;
   position: relative;

   padding: 0.4rem 0.2rem;
   margin: 0 20px;

   border-radius: 3px;
   border-bottom: 4px solid transparent;

   &.active {
      border-color: ${props => props.theme.colors.gray700};
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
`;

const NavBar = () => {
   return (
      <StyledNav>
         <NavContainer>
            <LogoLink to="/">
               <img
                  src="https://gamepedia.cursecdn.com/dota2_gamepedia/6/63/Toughness_Aura_%28Wildwing_Ripper%29_icon.png?version=aeb6df14ec9790ad0a5f6930603c578b"
                  alt="logo"
               />
               <Text variant="h3">Wundernote7</Text>
            </LogoLink>
            <UserProfile>
               <ProfileIcon />
            </UserProfile>
         </NavContainer>
      </StyledNav>
   );
};

export default NavBar;
