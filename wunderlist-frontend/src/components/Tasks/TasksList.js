import React from "react";
import styled from "styled-components";

import TaskCard from "./TaskCard";
import Controls from "./Controls";

const TasksContainer = styled.div`
   margin: 0 auto;
   padding: 20px 30px;

   width: 60%;
   border-radius: 3px;

   background: ${({ theme }) => theme.colors.mainGrey};
`;

const TasksList = ({ tasks }) => {
   const Tasks = tasks.map(task => {
      return <TaskCard task={task} />;
   });

   return (
      <TasksContainer>
         <Controls />
         {Tasks}
      </TasksContainer>
   );
};

export default TasksList;
