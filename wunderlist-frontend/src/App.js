import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "@smooth-ui/core-sc";
import { Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./utils/PrivateRoute";

import { Profile } from "./components/Profile/Profile";
import LoginForm from "./components/Login/LoginForm";
import RegisterForm from "./components/Register/RegisterForm";
import Tasks from "./components/Tasks/Tasks";
import ThemePicker from "./components/ThemePicker/ThemePicker";
import NavBar from "./components/Navbar/Navbar";
import { TestUser } from "./components/TestUser/TestUser";

/* Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app. */

// Global style that is applied to the whole project
const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600,700');
   * {
      font-family: 'Raleway', sans-serif;
      box-sizing: border-box;
   }

   h1,h2,h3,h4,h5,h6{
      letter-spacing: 0.6px;
      color: ${({ theme }) => theme.colors.secondary}
   }

   body {
      padding: 0;
      margin: 0;
      font-family: 'Open Sans', sans-serif;
      background: white;
      height: 100vh;

      background: #0f0c29;  
      background: ${({ theme }) =>
         `linear-gradient(to right, ${theme.colors.secondary}, #e9e4f0)`};
   }
`;

const AppContainer = styled.div`
   padding-top: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

function App() {
   const [theme, setTheme] = useState({
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
   });

   const setColorTheme = colorCode => {
      let newTheme = { ...theme };
      newTheme.colors.secondary = colorCode;
      setTheme(newTheme);
   };

   return (
      <ThemeProvider theme={theme}>
         <Normalize />
         <GlobalStyle />

         <AppContainer>
            <NavBar />
            <Switch>
               <PrivateRoute path="/tasks">
                  <Tasks />
                  <ThemePicker setColorTheme={setColorTheme} />
               </PrivateRoute>
               <PrivateRoute path="/profile">
                  <Profile />
               </PrivateRoute>
               <Route path="/login">
                  <LoginForm />
               </Route>
               <Route path="/register">
                  <RegisterForm />
               </Route>
               <Route path="/testUser" component={TestUser} />
               <PrivateRoute path="/">
                  <Tasks />
                  <ThemePicker setColorTheme={setColorTheme} />
               </PrivateRoute>
            </Switch>
         </AppContainer>
      </ThemeProvider>
   );
}

export default App;
