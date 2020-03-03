import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Profile } from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Tasks from "./components/Tasks/Tasks";

/* Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app. */

// Global style that is applied to the whole project
const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700&display=swap');

   * {
      box-sizing: border-box;
   }

   h1,h2,h3,h4,h5,h6{
      font-family: 'Montserrat', sans-serif;
      color: ${({ theme }) => theme.colors.primary}
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
   darkerGreen: "#97c4b4",
   babyPowder: "#f7f8f3",
   grapefruitPulp: "#ff6f5e",
   oliveish: "#6c887e",
   greenishGrey: "#e8ede9"
};

// Use these objects so theme can be dynamically changed --> https://styled-components.com/docs/advanced#theming
const theme = {
   colors: {
      primary: UIColors.antarcticBlue,
      secondary: UIColors.brookGreen,
      secondaryDark: UIColors.darkerGreen,
      background: UIColors.greenishGrey,
      info: "gray",
      light: UIColors.babyPowder,
      warning: UIColors.grapefruitPulp
   },

   fonts: {
      base: "'Open Sans', "
   }
};

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />

         <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login">
               <Login />
            </Route>
            <Route path="/register">
               <Register />
            </Route>
            <PrivateRoute path="/tasks" component={Tasks} />
            <PrivateRoute path="/profile" component={Profile} />
         </Switch>
      </ThemeProvider>
   );
}

export default App;
