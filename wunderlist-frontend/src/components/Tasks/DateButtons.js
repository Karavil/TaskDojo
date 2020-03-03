import React from "react";
import styled
// , { css }
   from "styled-components";
import { Button } from "@smooth-ui/core-sc";

const ButtonGroup = styled.div`
   margin: 10px auto;

   display: flex;
   justify-content: center;
`;

const DateRangeButton = styled(Button)`
   font-weight: 600;
   padding: 0.6rem 3rem;

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

   border-left: ${props =>
      props.middle ? `2px solid ${props.theme.colors.primary}` : {}};
   border-right: ${props =>
      props.middle ? `2px solid ${props.theme.colors.primary}` : {}};

   // Disable Smooth UI button color change on focus (to default white)
   &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
   }
`;

const DateButtons = () => {
   return (
      <ButtonGroup>
         <DateRangeButton left variant="secondary" scale="lg">
            This Week
         </DateRangeButton>
         <DateRangeButton middle variant="secondary" scale="lg">
            Today
         </DateRangeButton>
         <DateRangeButton right variant="secondary" scale="lg">
            This Week
         </DateRangeButton>
      </ButtonGroup>
   );
};

export default DateButtons;
