import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
   }

   body {
      margin: 0;
      background: white;
   }
`;

function App() {
   return (
      <>
         <GlobalStyle />

         <Switch>
            <Route path="/login">
               <Login />
            </Route>
            <Route path="/register">
               <Register />
            </Route>
            <Route path="/profile"></Route>
         </Switch>
      </>
   );
}

export default App;
