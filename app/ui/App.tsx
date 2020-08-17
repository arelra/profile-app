import React, { ReactElement, useEffect, useState } from "react";
import ThemeProvider from "./theme/ThemeProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import ProfileForm from "./profile/ProfileForm";
import { defaultProfile, saveProfile } from "../service/profile/profile";

/**
 * Conditionally renders the login or the main application with routing
 * @param loggedIn
 * @param loginView 
 * @param appView 
 */
const loginGuard = (
  loggedIn: boolean,
  loginView: ReactElement,
  appView: ReactElement) =>
  loggedIn ? appView: loginView;

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState<boolean>(false);
  const [ profile, setProfile ] = useState<Profile>(defaultProfile);
  /**
   * Mock saving to api
   */
  useEffect(() => {
    saveProfile(profile);
  }, [profile]);
  return (
    <ThemeProvider>
      {
        loginGuard(
          loggedIn,
          <Login setLoggedIn={setLoggedIn} setProfile={setProfile} />,
          <Router>
            <Nav setLoggedIn={setLoggedIn} />
            <Switch>
              <Route
                exact
                path="/profile"
                render={
                  () => <ProfileForm profile={profile} setProfile={setProfile} />
                }
              />
              <Route
                exact
                path="/"
                component={Home}
              />
            </Switch>
          </Router>  
        )
      }
    </ThemeProvider>
  );
};

export default App;
