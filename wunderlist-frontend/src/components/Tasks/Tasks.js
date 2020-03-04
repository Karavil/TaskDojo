import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { TimeFilteredTasks, AllTasks } from "./TasksList";
import DateButtons from "./DateButtons";

import Container from "../../styles/Container";

const dummyTasks = [
   {
      completed: false,
      creationTime: Date.now(),
      name:
         "This is a task without a due date. Always appears in 'Today's Tasks'",
      description: "Dummy task",
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
      name: "This is a task for sometime today.",
      description: "Dummy task",
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
      name: "This is for sometime this week (5 days out).",
      description: "Dummy task",
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
      name: "This is a task for 3 weeks out.",
      description: "Dummy task",
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
      name:
         "This is a task for 2 months out. Should only be listed in View All tab.",
      description: "Dummy task",
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

const TasksContainer = styled(Container)`
   display: flex;
   flex-direction: column;
`;

const addNewTask = data => {
   console.log("Submitting task...", data);
   axiosWithAuth()
      .post("/tasks", {
         task: data.name,
         description: data.description,
         timestamp: "1234",
         completed: false,
         due_date: "123"
      })
      .then(res => {
         console.log("Added new task", res.data);
      })
      .catch(err => {
         console.log("Task Error:", err.response);
      });
};

const deleteTask = taskID => {
   axiosWithAuth()
      .del("/tasks", {
         task_id: taskID
      })
      .then(res => {
         console.log("Deleted task", res.data);
      })
      .catch(err => {
         console.log("Error:", err.response);
      });
};

const editTask = (data, taskID) => {
   axiosWithAuth()
      .put("/tasks", {
         task_id: taskID,
         task: data.name,
         description: data.description,
         timestamp: "1234",
         completed: false,
         due_date: "123"
      })
      .then(res => {
         console.log("Deleted task", res.data);
      })
      .catch(err => {
         console.log("Error:", err.response);
      });
};

const taskFunctions = {
   addNewTask: addNewTask,
   deleteTask: deleteTask,
   editTask: editTask
};

const Tasks = () => {
   return (
      <TasksContainer>
         <DateButtons />
         <Switch>
            <Route path="/tasks/days/:dayCount">
               <TimeFilteredTasks addtasks={dummyTasks} />
            </Route>
            <Route path="/">
               <AllTasks taskFunctions={taskFunctions} tasks={dummyTasks} />
            </Route>
         </Switch>
      </TasksContainer>
   );
};

export default Tasks;
