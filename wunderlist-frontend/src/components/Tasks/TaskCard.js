import React from "react";
import styled from "styled-components";
import {
   Button
   // , Separator
} from "@smooth-ui/core-sc";

const StyledTaskCard = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   padding: 8px 20px;
   margin: 20px 0;

   background: ${({ theme }) => theme.colors.primary};
   color: white;
   border-radius: 3px;

   box-shadow: 0 0 2px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.34);
   transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

   &:hover {
      cursor: pointer;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25), 0 3px 5px rgba(0, 0, 0, 0.22);
   }

   h3,
   p {
      margin: 5px 0;
   }

   p {
      color: ${({ theme }) => theme.colors.info};
   }
`;

const TaskInfo = styled.div`
   margin: 0 50px;
`;

const Left = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
`;

const Right = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-end;
`;

const GenreTag = styled(Button)`
   margin: 0 5px;
`;

const TaskCard = ({ task }) => {
   const Tags = task.tags.map((tag, index) => {
      return (
         <GenreTag key={index} outline variant={tag.color}>
            {tag.genre}
         </GenreTag>
      );
   });

   return (
      <StyledTaskCard>
         <Left>
            <input type="checkbox" value={task.complete} />
            <TaskInfo>
               <h3>{task.name}</h3>
               <p>{task.description}</p>
            </TaskInfo>
         </Left>
         <Right>{Tags}</Right>
      </StyledTaskCard>
   );
};

export default TaskCard;
