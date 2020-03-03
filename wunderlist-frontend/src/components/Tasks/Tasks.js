import React from "react";
import { Route, Switch } from "react-router-dom";

import { TimeFilteredTasks, AllTasks } from "./TasksList";
import DateButtons from "./DateButtons";

const dummyTasks = [
   {
      completed: false,
      creationTime: Date.now(),
      taskName:
         "This is a task without a due date. Always appears in 'Today's Tasks'",
      taskExtra: "Dummy task",
      tags: [
         {
            genre: "School",
            color: "Red"
         }
      ]
   },
   {
      completed: false,
      creationTime: Date.now(),
      taskName: "This is a task for sometime today.",
      taskExtra: "Dummy task",
      due: Date.now() + 82400000,
      tags: [
         {
            genre: "School",
            color: "Red"
         }
      ]
   },
   {
      completed: false,
      creationTime: Date.now(),
      taskName: "This is for sometime this week (5 days out).",
      taskExtra: "Dummy task",
      due: Date.now() + 86400000 * 5,
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
   },
   {
      completed: false,
      creationTime: Date.now(),
      taskName: "This is a task for 3 weeks out.",
      taskExtra: "Dummy task",
      due: Date.now() + 86400000 * 21,
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
   },
   {
      completed: false,
      creationTime: Date.now(),
      taskName:
         "This is a task for 2 months out. Should only be listed in View All tab.",
      taskExtra: "Dummy task",
      due: Date.now() + 86400000 * 60,
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
         <Switch>
            <Route path="/tasks/days/:dayCount">
               <TimeFilteredTasks tasks={dummyTasks} />
            </Route>
            <Route path="/tasks/all">
               <AllTasks tasks={dummyTasks} />
            </Route>
         </Switch>
      </>
   );
};

export default Tasks;
