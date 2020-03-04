import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Button } from "@smooth-ui/core-sc";
import { FaInbox, FaTasks } from "react-icons/fa";

const ButtonGroup = styled.div`
   margin: ${props => props.margin || "0 auto"};

   display: flex;
   flex-direction: ${props => props.flexDirection};

   justify-content: center;
   align-items: center;
`;

const DateRangeButton = styled(Button)`
   font-weight: 600;
   color: white;

   padding: 0.6rem 1rem;
   width: 200px;

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

   .today {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

const ViewAllButton = styled(DateRangeButton)`
   padding: 0.1rem 8rem 0.3rem;
   width: auto;

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

const CenterText = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const TasksIcon = styled(FaTasks)`
   margin: 0 8px;
`;
const InboxIcon = styled(FaInbox)`
   margin: 0 8px;
`;

const DateButtons = props => {
   return (
      <ButtonGroup margin="0 0 30px" flexDirection="column">
         <ButtonGroup flexDirection="row">
            <NavLink to="/tasks/days/1">
               <DateRangeButton left variant="primary" scale="lg">
                  <CenterText>
                     <InboxIcon /> Today
                  </CenterText>
               </DateRangeButton>
            </NavLink>
            <NavLink to="/tasks/days/7">
               <DateRangeButton middle variant="primary" scale="lg">
                  Next 7 Days
               </DateRangeButton>
            </NavLink>
            <NavLink to="/tasks/days/30">
               <DateRangeButton right variant="primary" scale="lg">
                  Next 30 Days
               </DateRangeButton>
            </NavLink>
         </ButtonGroup>
         <NavLink to="/tasks">
            <ViewAllButton variant="secondaryDark" scale="lg">
               <CenterText>
                  View All <TasksIcon />
               </CenterText>
            </ViewAllButton>
         </NavLink>
      </ButtonGroup>
   );
};

export default DateButtons;
