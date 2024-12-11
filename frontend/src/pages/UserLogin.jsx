import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ 
      email:email,
      password:password
     });
     console.log(userData);
     
    setEmail("");
    setPassword("");    
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
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
          New Here?
          <Link to={"/signup"} className="text-blue-600">
            Create an Account
          </Link>
        </p>
      </div>
      <div>
        <Link to={"/captain-login"} className="bg-[#10b461] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
