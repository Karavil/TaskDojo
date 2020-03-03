import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Controls from "./Controls";
import TaskCard from "./TaskCard";

const TasksContainer = styled.div`
   margin: 0 auto;
   padding: 20px 30px;

   width: 60%;
   border-radius: 3px;

   box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);

   background: ${({ theme }) => theme.colors.background};
`;

const TasksList = ({ tasks }) => {
   const { dayCount } = useParams();
   console.log(useParams());
   const [title, setTitle] = useState(`Next ${dayCount} days`);

   useEffect(() => {
      if (dayCount === "1") {
         setTitle("Today's Tasks");
      } else {
         setTitle(`Next ${dayCount} days`);
      }
   }, [dayCount]);

   const Tasks = tasks.map(task => {
      return <TaskCard key={task.creationTime} task={task} />;
   });

   return (
      <TasksContainer>
         <Controls title={title} />
         {Tasks}
      </TasksContainer>
   );
};

export default TasksList;
