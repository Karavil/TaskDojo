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
   margin: 0 auto;
   padding: 20px 30px;

   border-radius: 3px;

   box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);

   background: ${({ theme }) => theme.colors.background};
`;

// Filter tasks by time range
const filterTasks = (
   tasks,
   startTimeUnix,
   endTimeUnix,
   dueTimeRequired = false
) => {
   console.log(startTimeUnix, endTimeUnix);
   return tasks.filter(task => {
      if (task.due && task.due >= startTimeUnix && task.due <= endTimeUnix) {
         return task;
      } else if (!task.due && !dueTimeRequired) {
         return task;
      }
   });
};

export const TimeFilteredTasks = ({ tasks }) => {
   const [title, setTitle] = useState("");
   const { dayCount } = useParams();

   // Calculate the Unix Epoch time (MS) for the amount of days out
   const endTimeUnix = Date.now() + dayCount * ONE_DAY_MS;

   // If the day count (parameter in url) is updated, update title and reload
   useEffect(() => {
      if (dayCount) {
         if (dayCount === "1") {
            setTitle("Today's Tasks");
         } else {
            setTitle(`Next ${dayCount} days`);
         }
      } else {
         setTitle("All Tasks");
      }
   }, [dayCount]);

   const Tasks = filterTasks(tasks, 0, endTimeUnix).map(task => {
      return <TaskCard key={task.creationTime} task={task} />;
   });

   return (
      <TasksContainer>
         <Controls title={title} />
         {Tasks}
      </TasksContainer>
   );
};

export const AllTasks = ({ tasks }) => {
   const { dayCount } = useParams();

   const TasksToday = filterTasks(tasks, 0, Date.now() + ONE_DAY_MS).map(
      task => {
         return <TaskCard key={task.creationTime} task={task} />;
      }
   );

   const OtherTasks = filterTasks(
      tasks,
      Date.now() + ONE_DAY_MS + 1,
      MAX_EPOCH_TIME,
      true
   ).map(task => {
      return <TaskCard key={task.creationTime} task={task} />;
   });

   return (
      <TasksContainer>
         <Controls title={"Today's Tasks"} />
         {TasksToday}
         <Controls title={"After Today"} />
         {OtherTasks}
      </TasksContainer>
   );
};
