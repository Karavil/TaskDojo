import React from "react";
import styled from "styled-components";

import TaskCard from "./TaskCard";
import Controls from "./Controls";

const TasksContainer = styled.div`
   margin: 0 auto;
   padding: 20px 30px;

   width: 60%;
   border-radius: 3px;

   box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);

   background: ${({ theme }) => theme.colors.background};
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
