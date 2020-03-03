import React from "react";
import TasksList from "./TasksList";

const dummyTasks = [
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
   return <TasksList tasks={dummyTasks} />;
};

export default Tasks;
