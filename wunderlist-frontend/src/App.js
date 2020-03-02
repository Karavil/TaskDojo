import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

// Global style that is applied to the whole project
const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700&display=swap');

   * {
      box-sizing: border-box;
   }

   h1,h2,h3,h4,h5,h6{
      font-family: 'Montserrat', sans-serif;
   }

   body {
      margin: 0;
      font-family: 'Open Sans', sans-serif;
      background: white;
   }
`;

// UI Theme
const UIColors = {
   antarcticBlue: "#2c3d63",
   brookGreen: "#aadcca",
   babyPowder: "#f7f8f3",
   grapefruitPulp: "#ff6f5e",
   oliveish: "#6c887e"
};

// Use these objects so theme can be dynamically changed --> https://styled-components.com/docs/advanced#theming
const theme = {
   colors: {
      primary: "#2c3d63",
      secondary: "#aadcca",
      light: "#f7f8f3",
      warning: "#ff6f5e"
   },

   fonts: {
      base: "'Open Sans', sans-serif"
   }
};

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />

         <Switch>
            <Route path="/login">
               <Login />
            </Route>
            <Route path="/register">
               <Register />
            </Route>
            <PrivateRoute path="/profile"></PrivateRoute>
         </Switch>
      </ThemeProvider>
   );
}

export default App;
