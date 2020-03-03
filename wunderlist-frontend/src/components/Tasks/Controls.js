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
   font-size: 2.5rem;
   margin: 0.4rem;
   fill: ${({ theme }) => theme.colors.primary};

   transition: 0.2s all;

   &:hover {
      cursor: pointer;

      font-size: 2.9rem;
      margin: 0.2rem;
   }
`;

const Controls = props => {
   return (
      <ControlsContainer>
         <h2>{props.title}</h2>
         <NewTaskIcon />
      </ControlsContainer>
   );
};

export default Controls;
