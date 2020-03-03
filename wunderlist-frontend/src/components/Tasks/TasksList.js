import React from "react";
import styled from "styled-components";

import TaskCard from "./TaskCard";

const NotesContainer = styled.div`
   margin: 0 auto;
   padding: 2%;

   width: 80%;
   border-radius: 3px;

   background: ${({ theme }) => theme.colors.container};
`;

const TasksList = ({ tasks }) => {
   const Tasks = tasks.map(task => {
      return <TaskCard task={task} />;
   });

   return <NotesContainer>{Tasks}</NotesContainer>;
};

export default TasksList;
