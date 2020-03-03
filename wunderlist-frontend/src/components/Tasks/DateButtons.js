import React from "react";
import styled from "styled-components";
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

   border: ${({ theme }) => `3px solid ${theme.colors.secondary}`};

   border-left: ${props =>
      props.middle ? `2px solid ${props.theme.colors.secondary}` : {}};
   border-right: ${props =>
      props.middle ? `2px solid ${props.theme.colors.secondary}` : {}};
`;

const ViewAllButton = styled(DateRangeButton)`
   padding: 0.1rem 8rem 0.3rem;
   border-top: none;
   border-radius: 0 0 50px 50px;

   &:hover {
      color: white;
   }

   &:not(:disabled):hover {
      color: white;
   }
`;

const DateButtons = () => {
   return (
      <ButtonGroup margin="10px auto" flexDirection="column">
         <ButtonGroup flexDirection="row">
            <DateRangeButton left variant="primary" scale="lg">
               This Week
            </DateRangeButton>
            <DateRangeButton middle variant="primary" scale="lg">
               Today
            </DateRangeButton>
            <DateRangeButton right variant="primary" scale="lg">
               This Month
            </DateRangeButton>
         </ButtonGroup>
         <ViewAllButton variant="secondaryDark" scale="lg">
            View All
         </ViewAllButton>
      </ButtonGroup>
   );
};

export default DateButtons;
