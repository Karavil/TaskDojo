import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

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
      return <TaskCard key={task.creationTime} task={task} />;
   });

   return (
      <TasksContainer>
         <Switch>
            <Route path="/tasks/today">
               <Controls title="Today" />
               {Tasks}
            </Route>
            <Route path="/tasks/week">
               <Controls title="This Week" />
               {Tasks}
            </Route>
            <Route path="/tasks/month">
               <Controls title="This Month" />
               {Tasks}
            </Route>
            <Route path="/tasks">
               <Controls title="All Tasks" />
               {Tasks}
            </Route>
         </Switch>
      </TasksContainer>
   );
};

export default TasksList;
