import React from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";

const ControlsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   h2 {
      margin: 0;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.primary};
   }
`;

const NewTaskIcon = styled(FaPlusCircle)`
   font-size: 2.2rem;
   fill: ${({ theme }) => theme.colors.primary};
`;

const Controls = () => {
   return (
      <ControlsContainer>
         <h2>Tasks</h2>
         <NewTaskIcon />
      </ControlsContainer>
   );
};

export default Controls;
