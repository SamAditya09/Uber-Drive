import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    } 

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    setEmail("");
    setPassword("");    
  }
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://pngimg.com/d/uber_PNG24.png"
            alt="uber-driver-logo"
          />
          <form action="" onSubmit={handleSubmit}>
            <h3 className="text-lg mb-2">What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="Email"
            />
            <h3 className="text-lg mb-2">Enter password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="Password"
            />
            <button
              className="bg-black text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="text-center">
            Join as a Captain?
            <Link to={"/captain-signup"} className="text-blue-600">
              Register here
            </Link>
          </p>
        </div>
        <div>
          <Link
            to={"/login"}
            className="bg-[#ec8423] text-white 
            flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
