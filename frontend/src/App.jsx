import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserSignup from "./pages/UserSignup.jsx"
import CaptainSignup from "./pages/CaptainSignup"
import UserLogin from "./pages/UserLogin"
import CaptainLogin from "./pages/CaptainLogin"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-signup" element={<CaptainSignup/>} />
      <Route path="/captain-login" element={<CaptainLogin/>} />
    </Routes>
  )
}

export default App