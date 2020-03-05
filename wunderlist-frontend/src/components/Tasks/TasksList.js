import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Controls from "./Controls";
import TaskCard from "./TaskCard";

//One day in milliseconds
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const MAX_EPOCH_TIME = 9999999999999;

// Style
const TasksContainer = styled.div`
   padding: 20px 30px;
   width: 100%;

   border-radius: 0 0 10px 10px;

   background: ${({ theme }) => theme.colors.background};
`;

// Filter tasks by time range
const filterTasks = (
   tasks,
   startTimeUnix,
   endTimeUnix,
   dueTimeRequired = false
) => {
   return tasks.filter(task => {
      if (task.due && task.due >= startTimeUnix && task.due <= endTimeUnix) {
         return task;
      } else if (!task.due && !dueTimeRequired) {
         return task;
      }
   });
};

const AllTasks = ({ tasks, taskFunctions }) => {
   const TasksToday = filterTasks(
      tasks,
      0,
      Date.now() + ONE_DAY_MS
   ).map(task => (
      <TaskCard taskFunctions={taskFunctions} key={task.id} task={task} />
   ));

   const OtherTasks = filterTasks(
      tasks,
      Date.now() + ONE_DAY_MS + 1,
      MAX_EPOCH_TIME,
      true
   ).map(task => (
      <TaskCard taskFunctions={taskFunctions} key={task.id} task={task} />
   ));

   return (
      <TasksContainer>
         <Controls taskFunctions={taskFunctions} title={"Today's Tasks"} />
         {TasksToday}
         <Controls taskFunctions={taskFunctions} title={"After Today"} />
         {OtherTasks}
      </TasksContainer>
   );
};

const TasksFilteredByDueDate = ({ taskFunctions, tasks }) => {
   const [title, setTitle] = useState("");
   const { daysOut } = useParams();
   console.log("params", useParams());

   useEffect(() => {
      if (daysOut) {
         if (daysOut === "1") {
            setTitle("Today's Tasks");
         } else {
            setTitle(`Next ${daysOut} days`);
         }
      } else {
         setTitle("All Tasks");
      }
   }, [daysOut]);

   // Calculate the Unix Epoch time (MS) for the amount of days out
   const maxTime = Date.now() + daysOut * ONE_DAY_MS;
   const Tasks = filterTasks(tasks, 0, maxTime).map(task => {
      return (
         <TaskCard taskFunctions={taskFunctions} key={task.id} task={task} />
      );
   });

   return (
      <TasksContainer>
         <Controls taskFunctions={taskFunctions} title={title} />
         {Tasks}
      </TasksContainer>
   );
};

const TasksList = ({ tasks, taskFunctions, all }) => {
   if (all) return <AllTasks tasks={tasks} taskFunctions={taskFunctions} />;
   return (
      <TasksFilteredByDueDate tasks={tasks} taskFunctions={taskFunctions} />
   );
};

export default TasksList;
