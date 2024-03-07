
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournelScreen from "../components/journal/JournelScreen";
import LoginScreen from "../components/auth/LoginScreen";

export default function AppRouter() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<JournelScreen />} />
          <Route path="/auth/*" element={<AuthRouter />} /> 
        <Route path="*" element={<LoginScreen />} />
        

        </Routes>   
        </Router>
      
    </div>
  )
}

