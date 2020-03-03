import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "@smooth-ui/core-sc";

const ButtonGroup = styled.div`
   margin: ${props => props.margin || "0 auto"};

   display: flex;
   flex-direction: ${props => props.flexDirection};

   justify-content: center;
   align-items: center;
`;

const DateRangeButton = styled(Button)`
   font-weight: 600;
   padding: 0.6rem 3rem;
   color: white;
   background-color: ${props =>
      props.active ? props.theme.colors.secondaryDark : {}};

   border-radius: ${props => {
      if (props.left) {
         return "15px 0 0 15px";
      } else if (props.right) {
         return "0 15px 15px 0";
      } else {
         return "0";
      }
   }};

   border: ${({ theme }) => `3px solid ${theme.colors.background}`};

   border-left: ${props => (props.middle ? `none` : {})};
   border-right: ${props => (props.middle ? `none` : {})};
`;

const ViewAllButton = styled(DateRangeButton)`
   padding: 0.1rem 8rem 0.3rem;

   border-top: none;
   border-color: ${({ theme }) => theme.colors.secondary};
   border-radius: 0 0 50px 50px;

   &:hover {
      color: white;
   }

   &:not(:disabled):hover {
      color: white;
   }
`;

const DateButtons = props => {
   return (
      <ButtonGroup margin="10px auto" flexDirection="column">
         <ButtonGroup flexDirection="row">
            <NavLink to="/tasks/today">
               <DateRangeButton left variant="primary" scale="lg">
                  Today
               </DateRangeButton>
            </NavLink>
            <NavLink to="/tasks/week">
               <DateRangeButton middle variant="primary" scale="lg">
                  This Week
               </DateRangeButton>
            </NavLink>
            <NavLink to="/tasks/month">
               <DateRangeButton right variant="primary" scale="lg">
                  This Month
               </DateRangeButton>
            </NavLink>
         </ButtonGroup>
         <NavLink to="/tasks">
            <ViewAllButton variant="secondaryDark" scale="lg">
               View All
            </ViewAllButton>
         </NavLink>
      </ButtonGroup>
   );
};

export default DateButtons;
