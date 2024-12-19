import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import CaptainLogin from "./pages/CaptainLogin";
import Start from "./pages/Start.jsx";
import UsersSignup from "./pages/UserSignup.jsx";
import UserProtectedWrapper from "./pages/UserProtectedWrapper.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UsersSignup />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route
        path="/home"
        element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        }
      />
    </Routes>
  );
};

export default App;
