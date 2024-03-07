import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";

export default function AuthRouter() {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="*" element={<LoginScreen />} />

      </Routes>
      </div>
      
    </div>
  );
}
