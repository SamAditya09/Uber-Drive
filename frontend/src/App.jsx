import React from "react";
import { Route, Routes } from "react-router";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptainLogin from "./pages/CaptainLogin";
import Start from "./pages/Start.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import CaptainHome from "./pages/CaptainHome.jsx";
import CaptainLogout from "./pages/CaptainLogout.jsx";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper.jsx";
import Home from "./pages/Home.jsx";
import Riding from "./pages/Riding.jsx";
import CaptainRiding from "./pages/CaptainRiding.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/riding" element={<Riding />} />
      <Route path="/captain-riding" element={<CaptainRiding />} />
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
      <Route
        path="/users/logout"
        element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        }
      />
      <Route
        path="/captain-home"
        element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        }
      />
      <Route
        path="/captains/logout"
        element={
          <CaptainProtectedWrapper>
            <CaptainLogout />
          </CaptainProtectedWrapper>
        }
      />
    </Routes>
  );
};

export default App;
