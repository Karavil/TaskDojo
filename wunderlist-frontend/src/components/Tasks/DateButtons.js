import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import { Button } from "@smooth-ui/core-sc";
import { FaInbox, FaTasks } from "react-icons/fa";

/**
 * Styles (with styled-components)
 */

const ButtonGroup = styled.div`
   margin: ${props => props.margin || "0 auto"};
   width: 100%;

   display: flex;
   flex-direction: ${props => props.flexDirection};

   justify-content: space-between;
   align-items: center;
`;

const RangeButtons = styled.div`
   display: flex;
   flex-direction: row;
`;

const DateRangeButton = styled(Button)`
   font-weight: 600;
   background: ${({ theme }) => theme.colors.secondary};
   color: ${({ theme }) => theme.colors.light};

   padding: 0.6rem 1rem;
   width: 200px;

   border-radius: ${props => {
      if (props.left) {
         return "5px 0 0 0";
      } else if (props.right) {
         return "0 5px 0 0";
      } else {
         return "0";
      }
   }};

   border: 2px solid transparent;
   border-color: ${({ theme }) => theme.colors.primary};

   border-right: ${props => props.middle && "none"};
   border-left: ${props => props.middle && "none"};

   border-bottom: none;

   .today {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

const ViewAllButton = styled(DateRangeButton)`
   width: 300px;
   border-radius: 5px 5px 0 0;
`;

const TasksIcon = styled(FaTasks)`
   position: relative;
   top: 3px;
   margin: 0 7.5px;
   font-size: 1.3rem;
`;
const InboxIcon = styled(FaInbox)`
   position: relative;
   top: 4px;
`;

/**
 * Logic & Design
 * @param {*} props
 */

const DateButtons = props => {
   return (
      <ButtonGroup flexDirection="row">
         <RangeButtons>
            <NavLink to="/tasks/days/1">
               <DateRangeButton left variant="secondary" scale="lg">
                  <InboxIcon /> Today
               </DateRangeButton>
            </NavLink>
            <NavLink to="/tasks/days/7">
               <DateRangeButton middle="true" variant="secondary" scale="lg">
                  Next 7 Days
               </DateRangeButton>
            </NavLink>
            <NavLink to="/tasks/days/30">
               <DateRangeButton right variant="secondary" scale="lg">
                  Next 30 Days
               </DateRangeButton>
            </NavLink>
         </RangeButtons>
         <NavLink to="/tasks">
            <ViewAllButton variant="secondary" scale="lg">
               View All <TasksIcon />
            </ViewAllButton>
         </NavLink>
      </ButtonGroup>
   );
};

export default DateButtons;
