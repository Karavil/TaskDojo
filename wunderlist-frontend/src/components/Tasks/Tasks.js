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
            const newTask = {
               completed: false,
               id: Math.random(),
               creationTime: Date.now(),
               name: data.name,
               description: data.description,
               due: undefined,
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
         .delete("/task/1", {
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
         .put("/tasks/1", {
            task_id: taskID,
            task: data.name || "",
            description: data.description || "",
            timestamp: Date.now(),
            completed: data.completed || false,
            due_date: data.due_date || null
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

   return (
      <TasksContainer>
         <DateButtons />
         <Switch>
            <Route path="/tasks/days/:dayCount">
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
