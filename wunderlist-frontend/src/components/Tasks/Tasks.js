import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

import TasksList from "./TasksList";
import DateButtons from "./DateButtons";

import Container from "../../styles/Container";

const TasksContainer = styled(Container)`
   display: flex;
   flex-direction: column;
`;

const Tasks = () => {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      setTasks([]);
      axiosWithAuth()
         .get("/tasks")
         .then(res => {
            res.data.task.map(task => {
               if (task.completed === false) {
                  const newTask = {
                     completed: task.completed,
                     id: task.id,
                     creationTime: task.timestamp,
                     name: task.task,
                     description: task.description,
                     due: task.due_date,
                     tags: task.tags || []
                  };
                  setTasks(tasks => [...tasks, newTask]);
               }
            });
         })
         .catch(err => {
            console.log("Failed getting user tasks:", err);
         });
   }, []);

   const addNewTask = data => {
      axiosWithAuth()
         .post("/tasks", {
            task: data.name,
            description: data.description,
            timestamp: Date.now(),
            completed: false,
            due_date: null
         })
         .then(res => {
            //UPDATE THIS
            console.log("Got new task with id:", res.data.id[0]);
            const newTask = {
               completed: false,
               id: res.data.id[0],
               creationTime: Date.now(),
               name: data.name,
               description: data.description,
               due_date: undefined,
               tags: []
            };
            setTasks(tasks => [...tasks, newTask]);
         })
         .catch(err => {
            console.log("Post Error:", err.response);
         });
   };

   const deleteTask = taskID => {
      axiosWithAuth()
         .delete("/task/" + taskID)
         .then(res => {
            console.log("Deleted task", res.data);
            setTasks(tasks => tasks.filter(task => task.id !== taskID));
         })
         .catch(err => {
            console.log("Error:", err.response);
         });
   };

   const editTask = (formData, taskID) => {
      axiosWithAuth()
         .put("/tasks/1" + taskID, {
            task: formData.name || "",
            description: formData.description || "",
            timestamp: Date.now(),
            completed: formData.completed || false,
            due_date: formData.due_date || null
         })
         .then(res => {
            //
            const newTask = {
               completed: false,
               id: taskID,
               creationTime: Date.now(),
               name: formData.name,
               description: formData.description,
               due_date: formData.due_date || null,
               tags: []
            };
            setTasks(tasks =>
               tasks.map(task => {
                  if (task.id === taskID) {
                     return {
                        ...task,
                        ...newTask
                     };
                  } else {
                     return { ...task };
                  }
               })
            );
            console.log("Edited task", res.data);
         })
         .catch(err => {
            console.log("Error while editing:", err.response);
         });
   };

   const taskFunctions = {
      addNewTask: addNewTask,
      deleteTask: deleteTask,
      editTask: editTask
   };

   return (
      <TasksContainer>
         <DateButtons />
         <Switch>
            <Route path="/tasks/days/:daysOut">
               <TasksList taskFunctions={taskFunctions} tasks={tasks} />
            </Route>
            <Route path="/">
               <TasksList
                  taskFunctions={taskFunctions}
                  tasks={tasks}
                  all="true"
               />
            </Route>
         </Switch>
      </TasksContainer>
   );
};

export default Tasks;
