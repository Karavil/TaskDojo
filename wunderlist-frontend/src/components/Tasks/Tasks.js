import React from "react";
import TasksList from "./TasksList";
import DateButtons from "./DateButtons";

const dummyTasks = [
   {
      completed: false,
      taskName: "Go to work and do this yadadada, after that do this",
      taskExtra: "English & Math class",
      tags: [
         {
            genre: "School",
            color: "Red"
         }
      ]
   },
   {
      completed: false,
      taskName: "Do Homework",
      taskExtra: "English & Math class",
      tags: [
         {
            genre: "School",
            color: "Red"
         }
      ]
   },
   {
      completed: false,
      taskName: "Do Homework",
      taskExtra: "English & Math class",
      tags: [
         {
            genre: "School",
            color: "Red"
         }
      ]
   },
   {
      completed: false,
      taskName: "Do Homework",
      taskExtra: "English & Math class",
      tags: [
         {
            genre: "School",
            color: "Red"
         },
         {
            genre: "Work",
            color: "Blue"
         },
         {
            genre: "Home",
            color: "Orange"
         }
      ]
   }
];

const Tasks = () => {
   return (
      <>
         <DateButtons />
         <TasksList tasks={dummyTasks} />
      </>
   );
};

export default Tasks;
