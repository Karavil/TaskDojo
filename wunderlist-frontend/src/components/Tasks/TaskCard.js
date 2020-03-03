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

   border-radius: 3px;
   border: 2px solid;
   border-color: ${({ theme }) => theme.colors.secondary};

   background: white;

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

const DueDate = styled.h3`
   letter-spacing: 0.1rem;
   padding: 0 10px;
`;

// needs unique keys

const TaskCard = ({ task }) => {
   let dueDate = null;
   if (task.dueEpoch) {
      dueDate = new Date(task.dueEpoch);
   }

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
               <h3>{task.taskName}</h3>
               <p>{task.taskExtra}</p>
            </TaskInfo>

            {dueDate && (
               <>
                  <h3>Due:</h3>
                  <DueDate>
                     {dueDate.getMonth()}/{dueDate.getDay()}/
                     {dueDate.getFullYear()}
                  </DueDate>
               </>
            )}
         </Left>
         <Right>{Tags}</Right>
      </StyledTaskCard>
   );
};

export default TaskCard;
