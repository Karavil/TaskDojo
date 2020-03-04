import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "@smooth-ui/core-sc";
import { Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./utils/PrivateRoute";

import { Profile } from "./components/Profile/Profile";
import LoginForm from "./components/Login/LoginForm";
import RegisterForm from "./components/Register/RegisterForm";
import Tasks from "./components/Tasks/Tasks";

import NavBar from "./components/Navbar/Navbar";
import { TestUser } from "./components/TestUser/TestUser";

/* Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app. */

// Global style that is applied to the whole project
const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700&display=swap');

   * {
      box-sizing: border-box;
   }

   h1,h2,h3,h4,h5,h6{
      font-family: 'Montserrat', sans-serif;
      color: ${({ theme }) => theme.colors.secondary}
   }

   body {
      padding: 0;
      margin: 0;
      font-family: 'Open Sans', sans-serif;
      background: white;
      height: 100vh;

      background: #0f0c29;  
      background: linear-gradient(to right, #502E88, #e9e4f0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   }
`;

const AppContainer = styled.div`
   padding-top: 100px;
   display: flex;
   justify-content: center;
`;

// Use these objects so theme can be dynamically changed --> https://styled-components.com/docs/advanced#theming
const theme = {
   colors: {
      primary: "white",
      secondary: "#502E88",

      background: "white",
      contrast: "black",

      light: "white",
      dark: "#363754",

      info: "#757F9A",
      warning: "#ff6f5e"
   },

   fonts: {
      base: "'Open Sans', "
   }
};

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Normalize />
         <GlobalStyle />

         <AppContainer>
            <NavBar />
            <Switch>
               <PrivateRoute path="/tasks" component={Tasks} />
               <PrivateRoute path="/profile" component={Profile} />
               <Route path="/login">
                  <LoginForm />
               </Route>
               <Route path="/register">
                  <RegisterForm />
               </Route>
               <Route path="/testUser" component={TestUser} />

               <PrivateRoute path="/" component={Tasks} />
            </Switch>
         </AppContainer>
      </ThemeProvider>
   );
}

export default App;
